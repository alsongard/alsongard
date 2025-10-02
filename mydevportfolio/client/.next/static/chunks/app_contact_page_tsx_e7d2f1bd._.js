(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // using use client as this form requires client(user) interaction, useState
;
;
function Contact() {
    _s();
    const [formData, setFormData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        name: "",
        email: "",
        phoneNumber: "",
        projectInfo: ""
    });
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData)=>{
            return {
                ...prevData,
                [name]: value
            };
        });
    }
    const [successMsg, setSuccessMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function handleSubmit(event) {
        event.preventDefault();
        setSuccessMsg("Waiting!!");
        // cont serviceId = process.env.
        console.log("submitted");
        console.log(formData);
        const public_id = ("TURBOPACK compile-time value", "IUgykajzupStyKmG2");
        const service_id = ("TURBOPACK compile-time value", "service_o8nuxsf");
        const template_id = ("TURBOPACK compile-time value", "template_92bikey");
        // console.log(`public_id: ${public_id}\n service_id: ${service_id}\n template_id: ${template_id} `);
        const emailParams = {
            userEmail: formData.email,
            userName: formData.name,
            userPhone: formData.phoneNumber,
            projectInformation: formData.projectInfo
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:5000/api/emails", {
            message: formData.projectInfo,
            userEmail: formData.email,
            name: formData.name,
            phoneNumber: formData.phoneNumber
        });
        console.log('this is respone');
        console.log(response);
        if (response.data.success) {
            setSuccessMsg('Project Data has been sent successfully! I Will be inTouch');
            setFormData(()=>{
                return {
                    name: "",
                    email: "",
                    phoneNumber: "",
                    projectInfo: ""
                };
            });
            setTimeout(()=>{
                setSuccessMsg('');
            }, 5000);
        }
    // emailjs
    //     .send(service_id, template_id, emailParams, {publicKey: public_id})
    //     .then((response)=>{
    //         console.log(`Success! response_status: ${response.status} response.text: ${response.text} `)
    //         setSuccessMsg('Project Data has been sent successfully! I Will be inTouch');
    //         setTimeout(()=>{
    //             setSuccessMsg('');
    //         }, 5000);
    //     },
    //     (err)=>{console.log(`FAILED... : Error: ${err}`)}
    // )
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " py-[100px] dark:bg-black dark:text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center text-[30px]",
                children: "Contact Me"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 102,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "text-black flex flex-col w-[50%] mx-auto  ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Enter Name"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 104,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        onChange: handleChange,
                        name: "name",
                        value: formData.name,
                        className: "border-[2px] dark:text-white py-[2.5px] px-[3px] outline-none border-sky-300 rounded-md ",
                        type: "text",
                        placeholder: "Name..."
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mt-[9px]",
                        children: "Enter email"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        onChange: handleChange,
                        name: "email",
                        value: formData.email,
                        className: "border-[2px] dark:text-white py-[2.5px] outline-none px-[3px] border-sky-300 rounded-md",
                        type: "email",
                        placeholder: "Enter email..."
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mt-[9px]",
                        children: "Enter phone number"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        onChange: handleChange,
                        name: "phoneNumber",
                        value: formData.phoneNumber,
                        className: "border-[2px] dark:text-white py-[2.5px] outline-none px-[3px] border-sky-300 rounded-md",
                        type: "number",
                        placeholder: "Enter phonenumber..."
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mt-[9px]",
                        children: "Enter Project Information"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        onChange: handleChange,
                        name: "projectInfo",
                        value: formData.projectInfo,
                        className: "border-[2px] dark:text-white py-[2.5px] outline-none px-[3px] border-sky-300 rounded-md",
                        placeholder: "Provide a description of the project..."
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "bg-[#75b98e] text-white w-[30%] mx-auto py-[2.5px] rounded-md my-[20px] hover:bg-green-600",
                        type: "submit",
                        value: "submit"
                    }, void 0, false, {
                        fileName: "[project]/app/contact/page.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            successMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "bg-green-500 w-1/2 mx-auto py-[10px] px-[5px] rounded-md text-[17px] font-semi-bold",
                children: "Project Data has been sent successfully! I Will be inTouch"
            }, void 0, false, {
                fileName: "[project]/app/contact/page.tsx",
                lineNumber: 116,
                columnNumber: 32
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/contact/page.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, this);
}
_s(Contact, "hz6Zfj7qKfnPstBuVMP9j6DwORA=");
_c = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_contact_page_tsx_e7d2f1bd._.js.map