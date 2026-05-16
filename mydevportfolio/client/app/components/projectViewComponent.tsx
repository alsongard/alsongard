"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil, Trash2, CheckCircle2, XCircle, ExternalLink, Github,X, Save, ChevronDown, LayoutGrid, List,FolderOpen, Search, ImageIcon, Link2, } from "lucide-react";
import type { DBProjectData } from "@/type";
import { method } from "lodash";
/* ─── Types ──────────────────────────────────────────────────────────────── */
export type Project = {
  id: number;
  projectname: string;
  projectdescription: string;
  techstack: string[];
  projecturl: string;
  githuburl: string;
  projecttype: string;
  projectimage: string;
  shortdescription: string | null;
  startdate: string | null;
  enddate: string | null;
};


// Omit is  built in type in typescrit that is used to remove  property from type and returns a new property type

const emptyProject = (): Omit<Project, "id"> => ({ // from the Project data type remove id and set the new type and set the return type for the implicit function. Note in javascript we have ()=>({}) using paranthesis around the object means that the object will be returned implicitly
    projectname: "",
    projectdescription: "",
    techstack: [],
    projecturl: "",
    githuburl: "",
    projecttype: "web development projects",
    projectimage: "",
    shortdescription: null,
    startdate: null,
    enddate: null,
});

const PROJECT_TYPES = [
    "web development projects",
    "mobile development",
    "machine learning / AI",
    "open source",
    "design system",
    "other",
];

/* ─── Tag Input ──────────────────────────────────────────────────────────── */
function TagInput({tags,onChange,}: {tags: string[];onChange: (tags: string[]) => void;}) 
{
    const [input, setInput] = useState("");

    const add = () => {
        const val = input.trim();
        if (val && !tags.includes(val)) onChange([...tags, val]); // if tag exists and not inclused in tag array add 
        setInput("");
    };

    return (
        <div className="flex flex-wrap gap-2 p-2 bg-white/5 border border-white/10 rounded-lg min-h-[44px]">
            {tags.map((t) => (
                <span
                    key={t}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-violet-500/20 text-violet-300 text-xs font-medium border border-violet-500/30"
                >
                    {t}
                    <button
                        type="button"
                        onClick={() => onChange(tags.filter((x) => x !== t))} // the filter array method is used to return a new array based on condition: e.g x == 2 returns any item in array that is equal to 2  // so from this we can say: if item in tags is not equal to 5 return  
                        className="text-violet-400 hover:text-red-400 transition-colors"
                    >
                        <X size={11} />
                    </button>
                </span>
            ))}
            <input
                value={input} // declared above as a useState value
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === ",") { // at any time the keys are pressed first: e.preventDefault() // prevents form submission | clearing of input and then run add: 
                    e.preventDefault();
                    add();
                }
                }}
                placeholder="Add tech… (Enter)"
                className="flex-1 min-w-[120px] bg-transparent text-sm text-white placeholder:text-white/25 outline-none px-1"
            />
        </div>
    );
}

/* ─── Modal Form ─────────────────────────────────────────────────────────── */
interface ModalProps  {
    project: Omit<Project, "id"> & {id? : number},
    onSave: (p: Omit<Project, "id"> & {id? : number}) => void,
    onClose: ()=> void,
    isSubmit: Boolean | null
} 
function ProjectModal({project,onSave,onClose,isSubmit,}: {project: Omit<Project, "id"> & { id?: number }; onSave:(p: Omit<Project, "id"> & { id?: number }) => void; onClose:() => void; isSubmit:Boolean | null} ) 
{   // the arguments given to the ProjectModal function is as follows: project: the type is set to Project but without the id and id is also set as optional: id?
    const [form, setForm] = useState(project); // this project parameter is acquired from EmptyProject which returns an object
    const isEdit = project.id ? true : false ; // if project.id exist we are editing : if not: adding
    const set = (key: keyof typeof form, value: unknown) =>
        setForm((prev) => ({ ...prev, [key]: value })); // used to update the form stte variable : get all previous data for the given key set value

    const inputCls = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/25 outline-none focus:border-violet-500/60 focus:bg-white/8 transition-colors";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            
            <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#0f0f0f] border-b border-white/[0.06]">
                    <div className="flex items-center gap-2.5">
                        <FolderOpen size={18} className="text-violet-400" />
                        <h2 className="text-white font-semibold text-base">
                            {isEdit ? "Edit Project" : "Add New Project"}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1.5 rounded-lg text-white/40 hover:text-white hover:bg-white/10 transition-all"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col gap-5">
                    {/* Project Name */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Project Name *</label>
                        <input
                            className={inputCls}
                            value={form.projectname}
                            onChange={(e) => set("projectname", e.target.value)}
                            placeholder="e.g. Mindbridge Mental Health Platform"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Short Description</label>
                        <input
                            className={inputCls}
                            value={form.shortdescription ?? ""}
                            name="short description"
                            onChange={(e) => set("shortdescription", e.target.value || null)}
                            placeholder="One-liner for cards / previews"
                        />
                    </div>

                    {/* Full Description */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Full Description *</label>
                        <textarea
                            rows={4}
                            className={inputCls + " resize-none"}
                            value={form.projectdescription}
                            onChange={(e) => set("projectdescription", e.target.value)}
                            placeholder="Describe what the project does, the problem it solves…"
                        />
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Tech Stack</label>
                        <TagInput tags={form.techstack} onChange={(t) => set("techstack", t)} /> {/* this set() funciton is defined within these function: :ProjectModal that is used for adding projects */}
                    </div>

               
                    {/* URLs — 2 col */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest font-medium flex items-center gap-1.5">
                                <Link2 size={12} /> Live URL
                            </label>
                            <input
                                className={inputCls}
                                value={form.projecturl}
                                onChange={(e) => set("projecturl", e.target.value)}
                                placeholder="https://…"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest font-medium flex items-center gap-1.5">
                                <Github size={12} /> GitHub URL
                            </label>
                            <input
                                className={inputCls}
                                value={form.githuburl}
                                onChange={(e) => set("githuburl", e.target.value)}
                                placeholder="https://github.com/…"
                            />
                            </div>
                        </div>

                    {/* Image URL */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium flex items-center gap-1.5">
                            <ImageIcon size={12} /> Project Image URL
                        </label>
                        <input
                            className={inputCls}
                            value={form.projectimage}
                            onChange={(e) => set("projectimage", e.target.value)}
                            placeholder="https://res.cloudinary.com/…"
                        />
                        {form.projectimage && (
                        <img
                            src={form.projectimage}
                            alt="preview"
                            className="mt-1 h-32 w-full object-cover rounded-lg border border-white/10"
                        />
                        )}
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Project Type</label>
                        <div className="relative">
                            <select
                                className={inputCls + " appearance-none pr-8 cursor-pointer"}
                                value={form.projecttype}
                                onChange={(e) => set("projecttype", e.target.value)}
                            >
                                {PROJECT_TYPES.map((t) => (
                                <option key={t} value={t} className="bg-[#0f0f0f]">{t}</option>
                                ))}
                            </select>
                            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                        </div>
                    </div>

                    {/* Dates — 2 col */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest font-medium">Start Date</label>
                            <input
                                type="date"
                                className={inputCls + " [color-scheme:dark]"}
                                value={form.startdate ? new Date(form.startdate).toISOString().split("T")[0] : ""}
                                onChange={(e) => set("startdate", e.target.value || null)}
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-xs text-white/40 uppercase tracking-widest font-medium">End Date</label>
                            <input
                                type="date"
                                className={inputCls + " [color-scheme:dark]"}
                                value={form.enddate ? new Date(form.enddate).toISOString().split("T")[0] : ""}
                                onChange={(e) => set("enddate", e.target.value || null)}
                            />
                        </div>
                    </div>
                </div>
                <div className="px-6 pb-2">
                    {isSubmit === true && (
                        <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
                        <p className="text-emerald-400 text-sm">
                            Success! Project has been <span className="font-semibold">{isEdit ? "updated" : "added"}</span> successfully!
                        </p>
                        </div>
                    )}

                    {isSubmit === false && (
                        <div className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20">
                        <XCircle size={15} className="text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-sm">
                            Error! Project could not be <span className="font-semibold">{isEdit ? "updated" : "added"}</span>. Please try again.
                        </p>
                        </div>
                    )}
                </div>
                {/* Footer */}
                <div className="sticky bottom-0 flex items-center justify-end gap-3 px-6 py-4 bg-[#0f0f0f] border-t border-white/[0.06]">
                    <button
                        onClick={onClose} // the onClose method that is given when we run: ProjectModal is : onClose={()=>setModal(null)}
                        className="px-4 py-2 text-sm text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => onSave(form)} // remember that we have a function handleSave that is being passed the form object
                        disabled={!form.projectname || !form.projectdescription}
                        className="flex items-center gap-2 px-5 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                    >
                        <Save size={15} />
                        {isEdit ? "Save Changes" : "Add Project"}
                    </button>
                </div>

            
            </div>

        </div>
    );
}

/* ─── Project Card (grid view) ───────────────────────────────────────────── */
function ProjectCard({project,onEdit,onDelete,}: {project: Project; onEdit: (p: Project) => void; onDelete: (id: number) => void;}) 
{
    return (
        <div className="group relative flex flex-col bg-[#0f0f0f] border border-white/[0.07] rounded-xl overflow-hidden hover:border-violet-500/30 transition-all duration-300">
            {/* Image */}
            <div className="relative h-44 w-full overflow-hidden bg-white/5">
                {
                    project.projectimage ? 
                    (
                        <img
                            src={project.projectimage}
                            alt={project.projectname}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    )
                    :
                    (
                        <div className="flex items-center justify-center h-full text-white/10">
                            <ImageIcon size={40} />
                        </div>
                    )
                }
                {/* type badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[10px] uppercase tracking-widest text-white/50 border border-white/10">
                    {project.projecttype}
                </span>

                {/* action buttons */}
                <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button 
                        onClick={() => onEdit(project)} // this is where the real Edit happens:  we have function onEdit which takes a Project (single project passed on iteration through .map()) : **NOTE**: onEdit() is actually: setModal(project)
                        className="p-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white/60 hover:text-violet-400 border border-white/10 transition-colors"
                    >
                        <Pencil size={13} /> {/**this icon is used for editing */}
                    </button>
                    <button
                        onClick={() => onDelete(project.id)}
                        className="p-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-white/60 hover:text-red-400 border border-white/10 transition-colors"
                    >
                        <Trash2 size={13} /> {/* this icon is used for deleting */}
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-4 gap-3">
                <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2">
                    {project.projectname}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed line-clamp-3">
                    {project.projectdescription} {/** project.shortdescription ?? project.projectdescription: this was added previously */}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                    {project.techstack.slice(0, 4).map((t) => ( // slice(startIndex, lastIndex): returns a new array based on the startIndex and LastIndex(exclusive) lastIndex  - 1
                        <span key={t} className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300/80 text-[10px] border border-violet-500/20">
                            {t}
                        </span>
                    ))}
                    {project.techstack.length > 4 && (
                        <span className="px-2 py-0.5 rounded bg-white/5 text-white/30 text-[10px]">
                        +{project.techstack.length - 4}
                        </span>
                    )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1 border-t border-white/[0.05]">
                    {project.projecturl && (
                        <a
                            href={project.projecturl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-white/30 hover:text-sky-400 transition-colors"
                        >
                        <ExternalLink size={12} /> Live
                        </a>
                    )}
                    {project.githuburl && (
                        <a
                            href={project.githuburl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-white/30 hover:text-white/70 transition-colors"
                        >
                            <Github size={12} /> GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

/* ─── Project Row (list view) ────────────────────────────────────────────── */
function ProjectRow({project,onEdit,onDelete,}: {project: Project;onEdit: (p: Project) => void;onDelete: (id: number) => void;}) 
{
    return (
        <div className="group flex items-center gap-4 px-4 py-3 rounded-xl bg-[#0f0f0f] border border-white/[0.07] hover:border-violet-500/25 transition-all duration-200">
            {/* Thumbnail */}
            <div className="h-12 w-16 flex-shrink-0 rounded-lg overflow-hidden bg-white/5">
                {project.projectimage ? (
                <img src={project.projectimage} alt="" className="h-full w-full object-cover" />
                ) : (
                <div className="flex items-center justify-center h-full text-white/10">
                    <ImageIcon size={18} />
                </div>
                )}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-medium truncate">{project.projectname}</p>
                <p className="text-white/30 text-xs truncate mt-0.5">{project.projecttype}</p>
            </div>

            {/* Stack pills */}
            <div className="hidden md:flex gap-1.5">
                {project.techstack.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300/80 text-[10px] border border-violet-500/20">
                    {t}
                </span>
                ))}
                {project.techstack.length > 3 && (
                <span className="px-2 py-0.5 rounded bg-white/5 text-white/30 text-[10px]">
                    +{project.techstack.length - 3}
                </span>
                )}
            </div>

            {/* Links + actions */}
            <div className="flex items-center gap-2 flex-shrink-0">
                {project.projecturl && (
                    <a 
                        href={project.projecturl} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 text-white/25 hover:text-sky-400 transition-colors">
                        <ExternalLink size={14} />
                    </a>
                )}
                {project.githuburl && (
                    <a 
                        href={project.githuburl} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 text-white/25 hover:text-white/70 transition-colors"
                    >
                        <Github size={14} />
                    </a>
                )}

                <button 
                    onClick={() => onEdit(project)}
                    className="p-1.5 text-white/25 hover:text-violet-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                    <Pencil size={14} />
                </button>

                <button 
                    onClick={() => onDelete(project.id)}
                    className="p-1.5 text-white/25 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
    );
}

/* ─── Delete Confirm ─────────────────────────────────────────────────────── */
function DeleteConfirm({ name, onConfirm, onCancel }: { name: string; onConfirm: () => void; onCancel: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <div className="w-full max-w-sm bg-[#0f0f0f] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                        <Trash2 size={18} className="text-red-400" />
                    </div>
                    <div>
                        <p className="text-white font-semibold text-sm">Delete Project</p>
                        <p className="text-white/40 text-xs mt-0.5">This action cannot be undone.</p>
                    </div>
                </div>

                <p className="text-white/50 text-sm">
                    Are you sure you want to delete <span className="text-white font-medium">"{name}"</span>?
                </p>
                <div className="flex gap-3 justify-end">
                    <button onClick={onCancel} className="px-4 py-2 text-sm text-white/40 hover:text-white rounded-lg hover:bg-white/5 transition-all">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 text-white rounded-lg font-medium transition-colors">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ─── Main View ──────────────────────────────────────────────────────────── */
export default function ProjectsView() 
{
    const [projects, setProjects] = useState<DBProjectData[]>([]);
    const [search, setSearch] = useState("");
    const [layout, setLayout] = useState<"grid" | "list">("grid");
    const [modal, setModal] = useState<null | "add" | Project>(null);
    const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);

    const [isSubmit, setIsSubmit] = useState<true | false | null>(null);


    async function getMyProjects()
    {
        try
        {
            const response = await fetch("/api/project", {method: "GET"});
            const data = await response.json();
            setProjects(data);
         
        }
        catch(err)
        {
            console.log(`Error: ${err}`);
            alert("An error occured while fetching data!");
        }
    }
    useEffect(()=>{
        getMyProjects();
    }, []);

    // fetch("/api/projects")
    //     .then( (response)=>response.json())
    //     .then(response => {fetchedProjects = response})
    //     .catch(err => {
    //         console.log(`Error: ${err}`);
    //         alert("An error occured while fetching data!");
    //     })


    // setTimeout(()=>{
    //     console.log('this is projectData from state function');
    //     console.log(projects);
    // }, 8000);


    const filtered = projects.filter((p) =>
        p.projectname.toLowerCase().includes(search.toLowerCase()) ||
        p.projecttype.toLowerCase().includes(search.toLowerCase()) ||
        p.techstack.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    );

    const handleSave = async (form: Omit<Project, "id"> & { id?: number }) =>  // this function is passed to  button : onSave(form) in ProjectModal whereby the form represents the Project data
    {    
        try
        {
            // check if id exist updating project
            if (form.id)
            {
            //     console.log(`this is project id: ${form.id}`)
            //     console.log(JSON.stringify(form));
                const response = await fetch(`/api/project/${form.id}`, {
                    method: "PUT",
                    body: JSON.stringify(form)
                });
    
                const result = await response.json();
                // console.log(`this is result from PUT`);
                // console.log(result);
                /*
                { success: true, message: "success on updating project" }*/
                if (result.success)
                {
                    setIsSubmit(true);
                    setTimeout(()=>{
                        setIsSubmit(null);
                        setModal(null);
                    }, 5000);  
                };
            }
            else 
            {
                const response = await fetch("/api/project",
                    {
                        method: "POST", 
                        body:JSON.stringify(form)
                    }
                );

                const result = await response.json();
                console.log('this is result form POST');
                console.log(result);
                /*
                    { success: true, message: "success on updating project" }
                */
                if (result.success)
                {
                    setIsSubmit(true);
                    setTimeout(()=>{
                        setIsSubmit(null);
                        setModal(null);
                    }, 5000);
                };
            }
        }
        catch(err)
        {
            console.log(`Error: ${err}`);
            // alert("Error")
            setIsSubmit(false);
             setTimeout(()=>{
                setIsSubmit(false);
            }, 5000);
        }

        // setModal(null);
    };

    const handleDelete = (id: number) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
        setDeleteTarget(null);
    };

    return (
        <div className="flex flex-col h-full gap-6">
            {/* ── Top bar ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-white font-bold text-2xl tracking-tight">Projects</h1>
                    <p className="text-white/30 text-sm mt-0.5">{projects.length} project{projects.length > 2 ? "s" : ""} in your portfolio</p> {/**if projects length greater than 1 set: "s" : "" */}
                </div>
                <button
                    onClick={() => setModal("add")}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors self-start sm:self-auto"
                >
                <Plus size={16} />
                    Add Project
                </button>
            </div>

            {/* ── Toolbar ── */}
            <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/25 pointer-events-none" />
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by name, type, or tech…"
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-violet-500/50 transition-colors"
                    />
                </div>
                <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
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
                        <List size={15} />
                    </button>
                </div>
            </div>

            {/* ── Content ── */}
            {
                filtered.length === 0 ? // if filtered.length is equals to   0 ::by default this is impossible as projects exist 
                (
                    <div className="flex flex-col items-center justify-center flex-1 gap-4 py-20">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <FolderOpen size={32} className="text-white/20" />
                        </div>
                        <p className="text-white/30 text-sm">
                            {search ? "No projects match your search." : "No projects yet. Add one to get started."}
                        </p>
                        {!search && (
                            <button
                                onClick={() => setModal("add")}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 text-sm border border-violet-500/20 transition-colors"
                            >
                                <Plus size={14} /> Add your first project
                            </button>
                        )}
                    </div>
                ) 
                : 
                layout === "grid" ?  // layout by default is grid unless changed
                (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                        {filtered.map((p) => ( // remember filtered is an array of projects(objects) that have properties/key:  && setModal:modal is null by default
                            <ProjectCard key={p.id} project={p} onEdit={setModal} onDelete={(id) => setDeleteTarget(projects.find((x) => x.id === id)!)} />
                        ))} {/**remember for each project it will have a ProjectCard and this project card will have the above properties */}
                        {/**for the argument: onEdit:(p:Project)=>void from the above we give it setModal (while it might be confusing): we know modal is state value and
                         * accepts Project, null, "add" The ProjectCard Component first argument is project which from the above is p: on ProjectCard Component itself you have: onEdit(project): this is equivalent to : setModal(project): which will enable ProjectModals to be rendered at the bottom
                         */}
                    </div>
                )
                :
                (
                    <div className="flex flex-col gap-2">
                        {filtered.map((p) => (
                            <ProjectRow key={p.id} project={p} onEdit={setModal} onDelete={(id) => setDeleteTarget(projects.find((x) => x.id === id)!)} /> // find() javascript method finds item based on condition, and returns the first value to be find : in our case we returned , The exclamation mark (!) is the non-null assertion operator in TypeScript.I know this value is not null or undefined, even if the type says it could be.
                        ))}
                    </div>
                )
            }

            {/* ── Modals ── */}
            {modal !== null && ( // if modal is not equal to null proceed
                <ProjectModal // after clicking the add button we have : setModal("add"): below will be true and emptyProject is called:
                    project={modal === "add" ? emptyProject() : modal}
                    onSave={handleSave}
                    onClose={() => setModal(null)}
                    isSubmit={isSubmit}
                />
            )}
            {deleteTarget && ( // remember deleteTarget can either be: Project : null so when we clicked onDelete in projectCard:Trash Icon we run: setDeleteTarget(): which is a state setter function and updates deleteTarget variable
                <DeleteConfirm
                    name={deleteTarget.projectname}
                    onConfirm={() => handleDelete(deleteTarget.id)} // handleDelete is a function defined above which specifically removes/filter the project with the given id from the projects array: it used setProjects : a state setter function , whose state variable: projects is used by filtered constant
                    onCancel={() => setDeleteTarget(null)}
                />
            )}
        </div>
    );
}