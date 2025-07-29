module.exports = {

"[project]/.next-internal/server/app/[lang]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/src/services/client/axiosClient.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// services/tenmsClient.ts
__turbopack_context__.s({
    "API": ()=>TenmsClient,
    "TenmsClient": ()=>TenmsClient
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const TenmsClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://api.10minuteschool.com/discovery-service/api/v1"),
    headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        accept: "application/json"
    }
});
;
}),
"[project]/src/services/api/ieltsCourse.api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "getIeltsCourse": ()=>getIeltsCourse
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$client$2f$axiosClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/client/axiosClient.ts [app-rsc] (ecmascript)");
;
const getIeltsCourse = async (lang)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$client$2f$axiosClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API"].get(`/products/ielts-course?lang=${lang}`);
        return response;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(`Failed to fetch IELTS course: ${error.message}`);
        }
        throw new Error("Failed to fetch IELTS course: Unknown error");
    }
};
}),
"[project]/src/app/[lang]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>IELTSCoursePage,
    "generateMetadata": ()=>generateMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2f$ieltsCourse$2e$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api/ieltsCourse.api.ts [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/home-index'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
async function generateMetadata({ params }) {
    const { locale } = params;
    const { data: { data: course } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2f$ieltsCourse$2e$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIeltsCourse"])(locale) // Fetch data for metadata
    ;
    const seo = course.seo;
    const openGraph = {};
    const images = [];
    seo.defaultMeta.forEach((meta)=>{
        if (meta.type === "property") {
            if (meta.value === "og:title") openGraph.title = meta.content;
            else if (meta.value === "og:description") openGraph.description = meta.content;
            else if (meta.value === "og:url") openGraph.url = meta.content;
            else if (meta.value === "og:type") openGraph.type = meta.content;
            else if (meta.value === "og:locale") openGraph.locale = meta.content;
            else if (meta.value === "og:image" || meta.value === "og:image:secure_url") {
                const existingImage = images.find((img)=>img.url === meta.content);
                if (!existingImage) {
                    images.push({
                        url: meta.content
                    });
                }
            } else if (meta.value === "og:image:type") {
                const lastImage = images[images.length - 1];
                if (lastImage) lastImage.type = `image/${meta.content}`;
            } else if (meta.value === "og:image:alt") {
                const lastImage = images[images.length - 1];
                if (lastImage) lastImage.alt = meta.content;
            }
        } else if (meta.type === "name") {
            // Handle other meta tags if needed, e.g., twitter:image, etc.
            if (meta.value === "og:image:secure_url") {
                const existingImage = images.find((img)=>img.url === meta.content);
                if (!existingImage) {
                    images.push({
                        url: meta.content
                    });
                }
            }
        }
    });
    if (images.length > 0) {
        openGraph.images = images;
    }
    const jsonLdScripts = seo.schema.filter((s)=>s.type === "ld-json" && s.meta_value) // Filter out empty meta_value
    .map((s)=>JSON.parse(s.meta_value));
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        openGraph: openGraph,
        alternates: {
            types: {
                "application/ld+json": jsonLdScripts
            }
        }
    };
}
async function IELTSCoursePage({ params }) {
    const { locale } = params;
    const { data: { data: course } } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2f$ieltsCourse$2e$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIeltsCourse"])(locale) // Fetch data for the page content
    ;
    return(// Pass the fetched course data to the client component
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeIndex, {
        course: course
    }, void 0, false, {
        fileName: "[project]/src/app/[lang]/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this));
}
}),
"[project]/src/app/[lang]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[lang]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__00829a42._.js.map