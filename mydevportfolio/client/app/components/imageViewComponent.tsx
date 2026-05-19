"use client";

import { useState, useRef, useCallback } from "react";
import {ImagePlus, Trash2, X, ZoomIn, Download,Upload, Search, LayoutGrid, Rows3,CheckSquare, Square, ImageOff, Copy, Check,} from "lucide-react";

/* ─── Types ──────────────────────────────────────────────────────────────── */
type ImageItem = {
    id: number;
    name: string;
    url: string;
    size: string;
    uploadedAt: string; // this property is created on default when you upload: created_at
    tag: string; // there is also a tag array property for the image uploaded
};

/* ─── Seed data ──────────────────────────────────────────────────────────── */
const seedImages: ImageItem[] = [
    {
        id: 1,
        name: "mindbridge.png",
        url: "https://res.cloudinary.com/dzth2gguw/image/upload/v1778615420/mindbridge_rc0bhb.png",
        size: "284 KB",
        uploadedAt: "2025-05-10",
        tag: "project",
    },
    {
        id: 2,
        name: "hero-banner.jpg",
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800",
        size: "512 KB",
        uploadedAt: "2025-04-22",
        tag: "banner",
    }
];

const TAGS = ["all", "project", "banner", "profile", "other"];

/* ─── Lightbox ───────────────────────────────────────────────────────────── */
function Lightbox({ image, onClose }: { image: ImageItem; onClose: () => void }) {
    const [copied, setCopied] = useState(false);

    const copyUrl = async () => {
        await navigator.clipboard.writeText(image.url); // navigator is a clipboard API in javascript that gives access to the clipboard on the user's device. in this we are writing the image.url to the device clipboard.
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={onClose}
        >
        <div
            className="relative max-w-5xl w-full flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()} // e.stopPropagation() function from the event object is used to stop actions going into parent component when an event is launced on child component.(Why?) after launching an event on child it then bubbles up to the parent element.  
        >
            {/* Controls row */}
            <div className="flex items-center justify-between px-1">
                <div className="flex flex-col">
                    <span className="text-white font-medium text-sm">{image.name}</span>
                    <span className="text-white/30 text-xs">{image.size} · {image.uploadedAt}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={copyUrl} // copyUrl function is referenced here and not run : \\Using copyUrl() whill run the function when the page is rendered
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/60 hover:text-white text-xs transition-all border border-white/10"
                    >
                        {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />} {/**changes the Icon to tick when copied  */}
                        {copied ? "Copied!" : "Copy URL"}
                    </button>
                    <a
                        href={image.url}
                        download={image.name} // instructs to download the resource supplied to the href attribute
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/10 hover:bg-white/15 text-white/60 hover:text-white transition-all border border-white/10"
                    >
                        <Download size={14} />
                    </a>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg bg-white/10 hover:bg-red-500/20 text-white/60 hover:text-red-400 transition-all border border-white/10"
                    >
                        <X size={14} />
                    </button>
                </div>
            </div> {/**the control row is displayed at the top */}

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 max-h-[78vh]">
                <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-contain max-h-[78vh]"
                />
            </div>

            {/* Tag */}
            <div className="flex justify-end">
                <span className="px-2.5 py-1 rounded-md bg-violet-500/15 border border-violet-500/25 text-violet-300 text-xs">
                    {image.tag}
                </span>
            </div>
        </div>
        </div>
  );
}

/* ─── Delete Confirm ─────────────────────────────────────────────────────── */
function DeleteConfirm({count,onConfirm,onCancel,}: {count: number;onConfirm: () => void;onCancel: () => void;}) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-sm bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                        <Trash2 size={18} className="text-red-400" />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm">Delete {count > 1 ? `${count} Images` : "Image"}</p>
                        <p className="text-white/40 text-xs mt-0.5">This action cannot be undone.</p>
                    </div>
                </div>
                <p className="text-white/50 text-sm">
                    Are you sure you want to permanently delete{" "}
                    <span className="text-white font-medium">{count} {count === 1 ? "image" : "images"}</span>?
                </p>
                <div className="flex gap-3 justify-end">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 text-sm text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Add Image Modal ────────────────────────────────────────────────────── */
function AddImageModal({onAdd,onClose,}: { onAdd:(img:Omit<ImageItem, "id"> & {userFile : File | null})=>void; onClose:()=>void;}) 
{
    type formType = {
        name: string, 
        url: string, 
        tag: string,
        userFile: File | null
    }
    const [form, setForm] = useState<formType> ({ name: "", url: "", tag: "other", userFile: null});
    const [dragging, setDragging] = useState(false);
    const fileRef = useRef<HTMLInputElement>(null);

    const inputCls =
        "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-violet-500/50 transition-colors";

    const handleFile = (file: File) => { // this function only runs when we use the input element for uploading files : either we click browse or click the div element
        const url = URL.createObjectURL(file);

        setForm((f) => ({ ...f, name: file.name, url:url, userFile:file }));
    };

    const onDrop = useCallback( // this is used when we drag a file to the input element
        (e: React.DragEvent) => 
        {
            e.preventDefault();
            setDragging(false);
            const file = e.dataTransfer.files[0];
            console.log(`this is file from e.datTransfers.files[0]`);
            console.log(file);
            if (file && file.type.startsWith("image/")) 
            {
                handleFile(file);  
            }
        },
        []
    );

    const canSave = form.name.trim() && form.url.trim();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
            <div className="w-full max-w-lg bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                        <ImagePlus size={17} className="text-violet-400" />
                        <h2 className="text-white font-semibold text-base">Add Image</h2>
                    </div>
                    <button onClick={onClose} className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all">
                        <X size={17} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-5">
                    <div
                        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                        onDragLeave={() => setDragging(false)}
                        onDrop={onDrop}
                        onClick={() => fileRef.current?.click()}
                        className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed cursor-pointer transition-all py-10
                        ${dragging ? "border-violet-500/60 bg-violet-500/5" : "border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04]"}`}
                    >
                        <Upload size={28} className={dragging ? "text-violet-400" : "text-white/20"} />
                        <div className="text-center">
                            <p className="text-white/50 text-sm">Drop an image here or <span className="text-violet-400 underline underline-offset-2">browse</span></p>
                            <p className="text-white/20 text-xs mt-1">PNG, JPG, WebP, GIF supported</p>
                        </div>
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/*"
                            className=""
                            onChange={(e) => {
                                console.log(`this is : e.target.files`);
                                console.log(e.target.files);
                                const f = e.target.files?.[0];
                                console.log("this is f");
                                console.log(f);
                                if (f) {handleFile(f)}; 
                                }
                            }
                        />
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-white/[0.06]" />
                        <span className="text-white/20 text-xs uppercase tracking-widest">or paste URL</span>
                        <div className="flex-1 h-px bg-white/[0.06]" />
                    </div>

                    {/* URL input */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest">Image URL</label>
                        <input
                            className={inputCls}
                            value={form.url}
                            onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))}
                            placeholder="https://res.cloudinary.com/…"
                        />
                    </div>

                    {/* Preview */}
                    {form.url && ( // if form.url exist display below: when image has been uploaded
                        <div className="h-36 rounded-lg overflow-hidden border border-white/10 bg-white/5">
                            <img src={form.url} alt="preview" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />
                        </div> // remember form.url is the location of th eimage
                    )}

                    {/* Name + Tag row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">File Name *</label>
                            <input
                                className={inputCls}
                                value={form.name}
                                onChange={(e) => setForm((f) => 
                                    ({ ...f, name: e.target.value }) // this is an implicit return : at any time you have a callback funciton which in the block has: ({}): Whatever is supplied to the curly braces is what will be returned in our case we have: ...prev, name: e.target.value 
                                )}
                                placeholder="hero-banner.png"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest">Tag</label>
                            <select
                                className={inputCls + " cursor-pointer"}
                                value={form.tag}
                                onChange={(e) => setForm((f) => ({ ...f, tag: e.target.value }))}
                            >
                                {
                                    TAGS.filter((t) => t !== "all").map((t) => (
                                        <option key={t} value={t} className="bg-[#0f0f0f]">{t}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/[0.06]">
                    <button onClick={onClose} className="px-4 py-2 text-sm text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                        Cancel
                    </button>
                    <button
                        disabled={!canSave} // if canSave is true: negated to false: disabled={false}  : however if canSave is false: negated to true: disabled={true} : cannot submit
                        onClick={() =>
                            onAdd({ // the funcitongiven to AddImageModal for the prop: onAdd should have: Object of Image type without "id"
                                name: form.name,
                                url: form.url,
                                tag: form.tag,
                                size: "—",
                                uploadedAt: new Date().toISOString().split("T")[0],
                                userFile: form.userFile ? form.userFile : null
                            })
                        }
                        className="flex items-center gap-2 px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                    >
                        <ImagePlus size={14} />
                        Add Image
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Image Card ─────────────────────────────────────────────────────────── */
function ImageCard({image,selected,onSelect,onView,onDelete,}: {image: ImageItem;selected: boolean;onSelect: (id: number) => void; onView: (img: ImageItem) => void; onDelete: (id: number) => void;}) 
{
    return (
        <div
            className={`group relative rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer
            ${selected ? "border-violet-500/60 ring-1 ring-violet-500/30" : "border-white/[0.07] hover:border-white/20"}`}
        >
            {/* Checkbox */}
            <button
                onClick={(e) => { e.stopPropagation(); onSelect(image.id); }}
                className={`absolute top-2.5 left-2.5 z-10 transition-all duration-150
                ${selected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} // if selected is true: opacity-100 (visible) : otherwise : opacity-0 group-hover:opacity-100
            >
                {selected // if selected is true : checkSquare icon else Square
                ? <CheckSquare size={17} className="text-violet-400 drop-shadow" />
                : <Square size={17} className="text-white/60 drop-shadow" />
                }
            </button>

            {/* Action buttons */}
            <div className="absolute top-2.5 right-2.5 z-10 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <button
                    onClick={(e) => { e.stopPropagation(); onView(image); }} // e.stopPropagation() : prevents bubble up of events further to the parent element 
                    className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white/60 hover:text-white border border-white/10 transition-colors"
                >
                    <ZoomIn size={13} />
                </button>
                <button
                    onClick={(e) => { e.stopPropagation(); onDelete(image.id); }}
                    className="p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white/60 hover:text-red-400 border border-white/10 transition-colors"
                >
                    <Trash2 size={13} />
                </button>
            </div>

            {/* Image */} 
            <div className="h-44 bg-white/5 overflow-hidden" onClick={() => onView(image)}>
                <img
                    src={image.url}
                    alt={image.name} // THIS DISPLAYS THE IMAGE 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.style.display = "none";
                    }}
                />
            </div>

            {/* Footer */}
            <div className="px-3 py-2.5 bg-[#0f0f0f] flex items-center justify-between gap-2">
                <div className="min-w-0">
                    <p className="text-white/80 text-xs font-medium truncate">{image.name}</p>
                    <p className="text-white/25 text-[10px] mt-0.5">{image.size} · {image.uploadedAt}</p>
                </div>
                    <span className="flex-shrink-0 px-2 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300/80 text-[10px]">
                    {image.tag}
                </span>
            </div>
        </div>
    );
}

/* ─── Image Row (list view) ──────────────────────────────────────────────── */
function ImageRow({image,selected,onSelect,onView,onDelete,}: {image: ImageItem;selected: boolean;onSelect: (id: number) => void;onView: (img: ImageItem) => void;onDelete: (id: number) => void;})
{
    return (
        <div
            className={`group flex items-center gap-4 px-4 py-3 rounded-xl border transition-all duration-200
            ${selected ? "border-violet-500/40 bg-violet-500/5" : "border-white/[0.07] bg-[#0f0f0f] hover:border-white/15"}`}
        >
            {/* Checkbox */}
            <button onClick={() => onSelect(image.id)} className="flex-shrink-0">
                {selected
                ? <CheckSquare size={16} className="text-violet-400" />
                : <Square size={16} className="text-white/20 group-hover:text-white/40 transition-colors" />
                }
            </button>

            {/* Thumbnail */}
            <div className="h-11 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/5 border border-white/10 cursor-pointer" onClick={() => onView(image)}>
                <img src={image.url} alt={image.name} className="h-full w-full object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{image.name}</p>
                <p className="text-white/30 text-xs mt-0.5">{image.uploadedAt}</p>
            </div>

            {/* Meta */}
            <span className="hidden sm:block text-white/30 text-xs">{image.size}</span>
            <span className="hidden sm:block px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-300/80 text-xs">
                {image.tag}
            </span>

            {/* Actions */}
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => onView(image)} className="p-1.5 text-white/30 hover:text-white transition-colors">
                    <ZoomIn size={14} />
                </button>
                <button onClick={() => onDelete(image.id)} className="p-1.5 text-white/30 hover:text-red-400 transition-colors">
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
    );
}

/* ─── Main ImageView ─────────────────────────────────────────────────────── */
export default function ImageView() 
{
    const [images, setImages] = useState<ImageItem[]>(seedImages);
    const [search, setSearch] = useState("");
    const [activeTag, setActiveTag] = useState("all");
    const [layout, setLayout] = useState<"grid" | "list">("grid");
    const [selected, setSelected] = useState<Set<number>>(new Set()); // the set() function is used to create an array of unique values: input include arrays new Set([1,2,2,3,5,5,1])
    const [lightbox, setLightbox] = useState<ImageItem | null>(null);
    const [showAdd, setShowAdd] = useState(false);
    const [deleteTarget, setDeleteTarget] = useState<number[] | null>(null);

    /* ── Derived ── */
    const filtered = images.filter((img) => {
        const matchTag = activeTag === "all" || img.tag === activeTag;
        const matchSearch = img.name.toLowerCase().includes(search.toLowerCase());
        return matchTag && matchSearch;
    });

    /* ── Selection ── */
    const toggleSelect = (id: number) =>
        setSelected((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            return next;
        });

    const allSelected = filtered.length > 0 && filtered.every((img) => selected.has(img.id)); // the every method is a array method that returns true each item in the array passed a given conditions otherwise false

    const toggleAll = () => { // either adds all img.id to new Set(): selected or removes img.id from new Set()
        if (allSelected)
        {
            setSelected((prev) => {
                const next = new Set(prev);
                filtered.forEach((img) => next.delete(img.id));
                return next;
            });
        } 
        else 
        {
            setSelected((prev) => {
                const next = new Set(prev);
                filtered.forEach((img) => next.add(img.id));
                return next;
            });
        }
    };

    /* ── CRUD ── */
    const handleAdd = async (img: Omit<ImageItem, "id"> & {userFile: File | null}) => {
        console.log('this is the image added');
        console.log(img);

        // setShowAdd(false);

        // create a formData object
        const formData = new FormData();
        /*
            { 
                name: "Screenshot_2026-05-10_16_03_12.png",
                url: "blob:http://localhost:3000/ad3c8fda-2a90-4643-897b-815748a05d68",
                tag: "profile",
                size: "—", 
                uploadedAt: "2026-05-18" 
            }       
        */
        formData.append("name", img.name);
        formData.append("tag", img.tag);
        if (img.userFile && img.userFile instanceof File)
        {
            formData.append("theFile", img.userFile , img.name);
        }
        else 
        {
            return;
        }


        try
        {
            const result = await fetch("/api/image/", {
                method: "POST", 
                body: formData
            })
            const data = await result.json();
            console.log(`this is data from fetch`);
            console.log(data);
        }
        catch(err)
        {
            console.log(`Error: ${err}`);
        }

        

    };

    const handleDelete = (ids: number[]) => {
        setImages((prev) => prev.filter((img) => !ids.includes(img.id))); // array [1].included(img.id) == true (img.id of one ) this is negated to false and returned (creating a new array)
        setSelected((prev) => {
            const next = new Set(prev);
            ids.forEach((id) => next.delete(id));
            return next;
        });
        setDeleteTarget(null);
    };

    const selectedCount = selected.size;

    return (
        <div className="flex flex-col h-full gap-6">
            {/* ── Header ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-white font-bold text-2xl tracking-tight">Images</h1>
                    <p className="text-white/30 text-sm mt-0.5">
                        {images.length} image{images.length !== 1 ? "s" : ""} in your library
                    </p>
                </div>
                <button
                    onClick={() => setShowAdd(true)} // enables the display of the addModal module
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors self-start sm:self-auto"
                >
                    <ImagePlus size={16} />
                    Add Image
                </button>
            </div>

            {/* ── Toolbar ── */}
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Search */}
                <div className="relative flex-1 max-w-sm">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search images…"
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-violet-500/50 transition-colors"
                    />
                </div>

                {/* Tag filter */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
                    {TAGS.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActiveTag(tag)}
                            className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs capitalize transition-all
                                ${activeTag === tag
                                ? "bg-violet-600 text-white"
                                : "bg-white/5 text-white/40 hover:text-white/70 border border-white/10"
                                }`}
                            >
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Layout toggle */}
                <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1 self-start">
                    <button
                        onClick={() => setLayout("grid")}
                        className={`p-1.5 rounded-md transition-colors ${layout === "grid" ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"}`}
                    >
                        <LayoutGrid size={15} />
                    </button>
                    <button
                        onClick={() => setLayout("list")}
                        className={`p-1.5 rounded-md transition-colors ${layout === "list" ? "bg-white/10 text-white" : "text-white/30 hover:text-white/60"}`}
                    >
                        <Rows3 size={15} />
                    </button>
                </div>
            </div>

            {/* ── Bulk action bar ── */}
            {
                selectedCount > 0 && (
                    <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
                        <button onClick={toggleAll} className="flex items-center gap-2 text-sm text-violet-300">
                            {allSelected ? <CheckSquare size={15} /> : <Square size={15} />}
                            {allSelected ? "Deselect all" : "Select all"}
                        </button>
                        <span className="text-white/30 text-sm">{selectedCount} selected</span>
                        <button
                            onClick={() => setDeleteTarget([...selected])}
                            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 text-sm border border-red-500/20 transition-colors"
                        >
                            <Trash2 size={13} />
                            Delete selected
                        </button>
                    </div>
                )
            }

            {/* ── Content ── */}
            {
                filtered.length === 0 ?  // displayes when filtered length is zero: means myImages are either 0 or search string cannot be found in either of the keys in the image objects
                (
                    <div className="flex flex-col items-center justify-center flex-1 gap-4 py-20">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <ImageOff size={32} className="text-white/15" />
                        </div>
                        <p className="text-white/30 text-sm">
                            {search || activeTag !== "all" ? "No images match your filters." : "No images yet. Add one to get started."}
                        </p>
                        {!search && activeTag === "all" && (
                            <button
                                onClick={() => setShowAdd(true)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 text-sm border border-violet-500/20 transition-colors"
                            >
                                <ImagePlus size={14} /> Add your first image
                            </button>
                        )}
                    </div>
                ) 
                : layout === "grid" ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                        {
                            filtered.map((img) => (
                                <ImageCard
                                    key={img.id}
                                    image={img}
                                    selected={selected.has(img.id)}
                                    onSelect={toggleSelect}
                                    onView={setLightbox}
                                    onDelete={(id) => setDeleteTarget([id])}
                                />
                          ))
                        }
                    </div>
                ):
                (
                    <div className="flex flex-col gap-2">
                        {
                            filtered.map((img) => (
                                <ImageRow
                                    key={img.id}
                                    image={img}
                                    selected={selected.has(img.id)}
                                    onSelect={toggleSelect}
                                    onView={setLightbox}
                                    onDelete={(id) => setDeleteTarget([id])}
                                />
                            ))
                        }
                    </div>
                )
            }

            {/* ── Modals ── */}
            {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}
            {showAdd && <AddImageModal onAdd={handleAdd} onClose={() => setShowAdd(false)} />} {/**this module for showing the AddImageModal */}
            {deleteTarget && (
                <DeleteConfirm
                    count={deleteTarget.length}
                    onConfirm={() => handleDelete(deleteTarget)}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}
        </div>
    );
}