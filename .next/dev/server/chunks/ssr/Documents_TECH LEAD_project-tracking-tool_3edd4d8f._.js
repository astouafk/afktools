module.exports = [
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/button.tsx
__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/dropdown-menu.tsx
__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/hooks/use-mobile.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//hooks/use-mobile.ts
__turbopack_context__.s([
    "useIsMobile",
    ()=>useIsMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
    const [isMobile, setIsMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](undefined);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = ()=>{
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener('change', onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return ()=>mql.removeEventListener('change', onChange);
    }, []);
    return !!isMobile;
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/input.tsx
__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/separator.tsx
__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Separator({ className, orientation = 'horizontal', decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/separator.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/sheet.tsx
__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
function SheetContent({ className, children, side = 'right', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/skeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/skeleton.tsx
__turbopack_context__.s([
    "Skeleton",
    ()=>Skeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Skeleton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-accent animate-pulse rounded-md', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/skeleton.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/tooltip.tsx
__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function TooltipProvider({ delayDuration = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        "data-slot": "tooltip-provider",
        delayDuration: delayDuration,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TooltipProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
            "data-slot": "tooltip",
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
        lineNumber: 35,
        columnNumber: 10
    }, this);
}
function TooltipContent({ className, sideOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "tooltip-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance', className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Arrow"], {
                    className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/sidebar.tsx
__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar,
    "SidebarContent",
    ()=>SidebarContent,
    "SidebarFooter",
    ()=>SidebarFooter,
    "SidebarGroup",
    ()=>SidebarGroup,
    "SidebarGroupAction",
    ()=>SidebarGroupAction,
    "SidebarGroupContent",
    ()=>SidebarGroupContent,
    "SidebarGroupLabel",
    ()=>SidebarGroupLabel,
    "SidebarHeader",
    ()=>SidebarHeader,
    "SidebarInput",
    ()=>SidebarInput,
    "SidebarInset",
    ()=>SidebarInset,
    "SidebarMenu",
    ()=>SidebarMenu,
    "SidebarMenuAction",
    ()=>SidebarMenuAction,
    "SidebarMenuBadge",
    ()=>SidebarMenuBadge,
    "SidebarMenuButton",
    ()=>SidebarMenuButton,
    "SidebarMenuItem",
    ()=>SidebarMenuItem,
    "SidebarMenuSkeleton",
    ()=>SidebarMenuSkeleton,
    "SidebarMenuSub",
    ()=>SidebarMenuSub,
    "SidebarMenuSubButton",
    ()=>SidebarMenuSubButton,
    "SidebarMenuSubItem",
    ()=>SidebarMenuSubItem,
    "SidebarProvider",
    ()=>SidebarProvider,
    "SidebarRail",
    ()=>SidebarRail,
    "SidebarSeparator",
    ()=>SidebarSeparator,
    "SidebarTrigger",
    ()=>SidebarTrigger,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftIcon$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/panel-left.js [app-ssr] (ecmascript) <export default as PanelLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$hooks$2f$use$2d$mobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/hooks/use-mobile.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/tooltip.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';
const SidebarContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"](null);
function useSidebar() {
    const context = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"](SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider.');
    }
    return context;
}
function SidebarProvider({ defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }) {
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$hooks$2f$use$2d$mobile$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useIsMobile"])();
    const [openMobile, setOpenMobile] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](defaultOpen);
    const open = openProp ?? _open;
    const setOpen = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"]((value)=>{
        const openState = typeof value === 'function' ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        } else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [
        setOpenProp,
        open
    ]);
    // Helper to toggle the sidebar.
    const toggleSidebar = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"](()=>{
        return isMobile ? setOpenMobile((open)=>!open) : setOpen((open)=>!open);
    }, [
        isMobile,
        setOpen,
        setOpenMobile
    ]);
    // Adds a keyboard shortcut to toggle the sidebar.
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        toggleSidebar
    ]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed';
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar
        }), [
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipProvider"], {
            delayDuration: 0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-slot": "sidebar-wrapper",
                style: {
                    '--sidebar-width': SIDEBAR_WIDTH,
                    '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                    ...style
                },
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full', className),
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
            lineNumber: 132,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
function Sidebar({ side = 'left', variant = 'sidebar', collapsible = 'offcanvas', className, children, ...props }) {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === 'none') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-slot": "sidebar",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col', className),
            ...props,
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
            lineNumber: 171,
            columnNumber: 7
        }, this);
    }
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
            open: openMobile,
            onOpenChange: setOpenMobile,
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar",
                "data-mobile": "true",
                className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                style: {
                    '--sidebar-width': SIDEBAR_WIDTH_MOBILE
                },
                side: side,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                        className: "sr-only",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                children: "Sidebar"
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                children: "Displays the mobile sidebar."
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                                lineNumber: 201,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full w-full flex-col",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 187,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group peer text-sidebar-foreground hidden md:block",
        "data-state": state,
        "data-collapsible": state === 'collapsed' ? collapsible : '',
        "data-variant": variant,
        "data-side": side,
        "data-slot": "sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-slot": "sidebar-gap",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear', 'group-data-[collapsible=offcanvas]:w-0', 'group-data-[side=right]:rotate-180', variant === 'floating' || variant === 'inset' ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]' : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)')
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-slot": "sidebar-container",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex', side === 'left' ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]' : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]', // Adjust the padding for floating and inset variants.
                variant === 'floating' || variant === 'inset' ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]' : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l', className),
                ...props,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-sidebar": "sidebar",
                    "data-slot": "sidebar-inner",
                    className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function SidebarTrigger({ className, onClick, ...props }) {
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        "data-sidebar": "trigger",
        "data-slot": "sidebar-trigger",
        variant: "ghost",
        size: "icon",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('size-7', className),
        onClick: (event)=>{
            onClick?.(event);
            toggleSidebar();
        },
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelLeftIcon$3e$__["PanelLeftIcon"], {}, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle Sidebar"
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 265,
        columnNumber: 5
    }, this);
}
function SidebarRail({ className, ...props }) {
    const { toggleSidebar } = useSidebar();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-sidebar": "rail",
        "data-slot": "sidebar-rail",
        "aria-label": "Toggle Sidebar",
        tabIndex: -1,
        onClick: toggleSidebar,
        title: "Toggle Sidebar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex', 'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize', '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize', 'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full', '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2', '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 287,
        columnNumber: 5
    }, this);
}
function SidebarInset({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        "data-slot": "sidebar-inset",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background relative flex w-full flex-1 flex-col', 'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 310,
        columnNumber: 5
    }, this);
}
function SidebarInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
        "data-slot": "sidebar-input",
        "data-sidebar": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background h-8 w-full shadow-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
function SidebarHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-header",
        "data-sidebar": "header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 p-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 338,
        columnNumber: 5
    }, this);
}
function SidebarFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-footer",
        "data-sidebar": "footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 p-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 349,
        columnNumber: 5
    }, this);
}
function SidebarSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "sidebar-separator",
        "data-sidebar": "separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-sidebar-border mx-2 w-auto', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 363,
        columnNumber: 5
    }, this);
}
function SidebarContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-content",
        "data-sidebar": "content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 374,
        columnNumber: 5
    }, this);
}
function SidebarGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-group",
        "data-sidebar": "group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('relative flex w-full min-w-0 flex-col p-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
function SidebarGroupLabel({ className, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'div';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-group-label",
        "data-sidebar": "group-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', 'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 405,
        columnNumber: 5
    }, this);
}
function SidebarGroupAction({ className, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-group-action",
        "data-sidebar": "group-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
function SidebarGroupContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-group-content",
        "data-sidebar": "group-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 446,
        columnNumber: 5
    }, this);
}
function SidebarMenu({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "data-slot": "sidebar-menu",
        "data-sidebar": "menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex w-full min-w-0 flex-col gap-1', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 457,
        columnNumber: 5
    }, this);
}
function SidebarMenuItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "sidebar-menu-item",
        "data-sidebar": "menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group/menu-item relative', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
const sidebarMenuButtonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', {
    variants: {
        variant: {
            default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            outline: 'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]'
        },
        size: {
            default: 'h-8 text-sm',
            sm: 'h-7 text-xs',
            lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function SidebarMenuButton({ asChild = false, isActive = false, variant = 'default', size = 'default', tooltip, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    const { isMobile, state } = useSidebar();
    const button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-menu-button",
        "data-sidebar": "menu-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(sidebarMenuButtonVariants({
            variant,
            size
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 516,
        columnNumber: 5
    }, this);
    if (!tooltip) {
        return button;
    }
    if (typeof tooltip === 'string') {
        tooltip = {
            children: tooltip
        };
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                asChild: true,
                children: button
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TooltipContent"], {
                side: "right",
                align: "center",
                hidden: state !== 'collapsed' || isMobile,
                ...tooltip
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 537,
        columnNumber: 5
    }, this);
}
function SidebarMenuAction({ className, asChild = false, showOnHover = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-menu-action",
        "data-sidebar": "menu-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0', // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden', 'peer-data-[size=sm]/menu-button:top-1', 'peer-data-[size=default]/menu-button:top-1.5', 'peer-data-[size=lg]/menu-button:top-2.5', 'group-data-[collapsible=icon]:hidden', showOnHover && 'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 561,
        columnNumber: 5
    }, this);
}
function SidebarMenuBadge({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-menu-badge",
        "data-sidebar": "menu-badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none', 'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground', 'peer-data-[size=sm]/menu-button:top-1', 'peer-data-[size=default]/menu-button:top-1.5', 'peer-data-[size=lg]/menu-button:top-2.5', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 586,
        columnNumber: 5
    }, this);
}
function SidebarMenuSkeleton({ className, showIcon = false, ...props }) {
    // Random width between 50 to 90%.
    const width = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"](()=>{
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sidebar-menu-skeleton",
        "data-sidebar": "menu-skeleton",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex h-8 items-center gap-2 rounded-md px-2', className),
        ...props,
        children: [
            showIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "size-4 rounded-md",
                "data-sidebar": "menu-skeleton-icon"
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 623,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                className: "h-4 max-w-(--skeleton-width) flex-1",
                "data-sidebar": "menu-skeleton-text",
                style: {
                    '--skeleton-width': width
                }
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
                lineNumber: 628,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 616,
        columnNumber: 5
    }, this);
}
function SidebarMenuSub({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        "data-slot": "sidebar-menu-sub",
        "data-sidebar": "menu-sub",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 643,
        columnNumber: 5
    }, this);
}
function SidebarMenuSubItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "sidebar-menu-sub-item",
        "data-sidebar": "menu-sub-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('group/menu-sub-item relative', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 661,
        columnNumber: 5
    }, this);
}
function SidebarMenuSubButton({ asChild = false, size = 'md', isActive = false, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'a';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "sidebar-menu-sub-button",
        "data-sidebar": "menu-sub-button",
        "data-size": size,
        "data-active": isActive,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0', 'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground', size === 'sm' && 'text-xs', size === 'md' && 'text-sm', 'group-data-[collapsible=icon]:hidden', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx",
        lineNumber: 684,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/theme-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/theme-toggle.tsx
__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ThemeToggle() {
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load theme from localStorage on mount
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("light", savedTheme === "light");
        }
    }, []);
    const toggleTheme = ()=>{
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("light", newTheme === "light");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        onClick: toggleTheme,
        className: "h-9 w-9",
        children: [
            theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/theme-toggle.tsx",
                lineNumber: 29,
                columnNumber: 27
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "h-5 w-5"
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/theme-toggle.tsx",
                lineNumber: 29,
                columnNumber: 57
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/theme-toggle.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/theme-toggle.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/top-nav.tsx
__turbopack_context__.s([
    "TopNav",
    ()=>TopNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/bell.js [app-ssr] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/theme-toggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function TopNav() {
    const { toggleSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSidebar"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-border bg-card",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-16 items-center justify-between gap-4 px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    size: "icon",
                    className: "md:hidden",
                    onClick: toggleSidebar,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        className: "h-5 w-5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 md:ml-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                    asChild: true,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "default",
                                        size: "icon",
                                        className: "rounded-full bg-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-semibold",
                                            children: "TL"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 35,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                    align: "end",
                                    className: "w-56",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                            children: "My Account"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            children: "Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            children: "Settings"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                            children: "Log out"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/top-nav.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/app-sidebar.tsx
__turbopack_context__.s([
    "AppSidebar",
    ()=>AppSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/folder-kanban.js [app-ssr] (ecmascript) <export default as FolderKanban>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const items = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        title: "Projets",
        url: "/projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"],
        matchPaths: [
            "/projects",
            "/project"
        ] // Matcher /projects et /project/* (analyses incluses)
    },
    {
        title: "Rapports",
        url: "/reports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        matchPaths: [
            "/reports"
        ] // Uniquement la page globale /reports
    },
    {
        title: "Exports",
        url: "/exports",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        matchPaths: [
            "/export"
        ] // Uniquement la page globale /reports
    },
    {
        title: "Historique",
        url: "/history",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        matchPaths: [
            "/history"
        ] // Uniquement la page globale /reports
    },
    {
        title: "Paramètres",
        url: "/settings",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    }
];
function AppSidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { signOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSignOut = async ()=>{
        await signOut();
        router.push("/login");
    };
    const isActive = (item)=>{
        if (item.matchPaths) {
            // Vérifier si le pathname commence par un des matchPaths
            return item.matchPaths.some((path)=>pathname.startsWith(path));
        }
        return pathname === item.url;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarHeader"], {
                className: "border-b border-border px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/dashboard",
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$kanban$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderKanban$3e$__["FolderKanban"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-lg font-semibold text-foreground",
                            children: "AFKTOOLS"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroup"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupLabel"], {
                            children: "Menu Principal"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarGroupContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenu"], {
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuItem"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarMenuButton"], {
                                            asChild: true,
                                            isActive: isActive(item),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.url,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                                lineNumber: 106,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                            lineNumber: 105,
                                            columnNumber: 19
                                        }, this)
                                    }, item.title, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SidebarFooter"], {
                className: "border-t border-border p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    className: "w-full justify-start",
                    onClick: handleSignOut,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        "Déconnexion"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/app-sidebar.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/card.tsx
__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/ui/badge.tsx
__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/badge.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/report-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // lib/services/report-service.ts
// import { collection, addDoc, getDocs, getDoc, doc, query, where, Timestamp, updateDoc } from 'firebase/firestore'
// import { db, auth } from '@/lib/firebase'
// export interface Task {
//   id: string
//   description: string
//   assignedTo?: string // ID du membre
//   completed: boolean
// }
// export interface Blocker {
//     id: string
//     description: string
//     level: 'high' | 'medium' | 'low'
//     mitigation?: string
//   }
// export interface Report {
//   id: string
//   projectId: string
//   userId: string
//   weekNumber: number
//   startDate: Date
//   endDate: Date
//   status: 'Draft' | 'Published'
//   currentStep: number
//   summary: string
//   tasks: Task[]
//   blockers:  Blocker[]
//   nextWeekObjectives: string[]
//   createdAt: Date
//   updatedAt: Date
// }
// export async function createReport(data: {
//   projectId: string
//   weekNumber: number
//   startDate: string
//   endDate: string
//   currentStep?: number
//   summary?: string
//   tasks?: Task[]
//   blockers?: Blocker[]
//   nextWeekObjectives?: string[]
// }) {
//   console.log('[Report Service] Creating report:', data)
//   // Vérifier doublon : même projet + même numéro de semaine
//   const existingQuery = query(
//     collection(db, 'reports'),
//     where('projectId', '==', data.projectId),
//     where('userId', '==', auth.currentUser?.uid),
//     where('weekNumber', '==', data.weekNumber)
//   )
//   const existingSnapshot = await getDocs(existingQuery)
//   if (!existingSnapshot.empty) {
//     throw new Error(`Un rapport existe déjà pour la semaine ${data.weekNumber} de ce projet`)
//   }
//   const docRef = await addDoc(collection(db, 'reports'), {
//     projectId: data.projectId,
//     userId: auth.currentUser?.uid,
//     weekNumber: data.weekNumber,
//     startDate: Timestamp.fromDate(new Date(data.startDate)),
//     endDate: Timestamp.fromDate(new Date(data.endDate)),
//     status: 'Draft',
//     currentStep: data.currentStep || 0,
//     summary: data.summary || '',
//     tasks: data.tasks || [],
//     blockers: data.blockers || [],
//     nextWeekObjectives: data.nextWeekObjectives || [],
//     createdAt: Timestamp.now(),
//     updatedAt: Timestamp.now()
//   })
//   console.log('[Report Service] Report created with ID:', docRef.id)
//   return docRef.id
// }
// export async function updateReport(
//   reportId: string,
//   data: {
//     currentStep?: number
//     summary?: string
//     tasks?: Task[]
//     blockers?: string[]
//     nextWeekObjectives?: string[]
//     status?: 'Draft' | 'Published'
//   }
// ) {
//   console.log('[Report Service] Updating report:', reportId, data)
//   const reportRef = doc(db, 'reports', reportId)
//   await updateDoc(reportRef, {
//     ...data,
//     updatedAt: Timestamp.now()
//   })
//   console.log('[Report Service] Report updated')
// }
// export async function getReportsByProject(projectId: string): Promise<Report[]> {
//   console.log('[Report Service] Fetching reports for project:', projectId)
//   const q = query(
//     collection(db, 'reports'),
//     where('projectId', '==', projectId),
//     where('userId', '==', auth.currentUser?.uid)
//   )
//   const snapshot = await getDocs(q)
//   console.log('[Report Service] Query returned:', snapshot.docs.length, 'documents')
//   const reports = snapshot.docs.map(doc => {
//     const data = doc.data()
//     return {
//       id: doc.id,
//       ...data,
//       startDate: data.startDate?.toDate(),
//       endDate: data.endDate?.toDate(),
//       createdAt: data.createdAt?.toDate(),
//       updatedAt: data.updatedAt?.toDate()
//     }
//   }) as Report[]
//   const sorted = reports.sort((a, b) => b.weekNumber - a.weekNumber)
//   console.log('[Report Service] Returning reports:', sorted)
//   return sorted
// }
// export async function getReportById(reportId: string): Promise<Report | null> {
//     console.log('[Report Service] Fetching report:', reportId)
//     try {
//       const reportRef = doc(db, 'reports', reportId)
//       const reportSnap = await getDoc(reportRef)
//       if (!reportSnap.exists()) {
//         return null
//       }
//       const data = reportSnap.data()
//       if (data.userId !== auth.currentUser?.uid) {
//         return null
//       }
//       return {
//         id: reportSnap.id,
//         ...data,
//         startDate: data.startDate?.toDate(),
//         endDate: data.endDate?.toDate(),
//         createdAt: data.createdAt?.toDate(),
//         updatedAt: data.updatedAt?.toDate(),
//         tasks: data.tasks || [],
//         blockers: data.blockers || [],
//         nextWeekObjectives: data.nextWeekObjectives || []
//       } as Report
//     } catch (error) {
//       console.error('[Report Service] Error fetching report:', error)
//       throw error
//     }
//   }
//   export async function getAllReports(): Promise<Report[]> {
//     console.log('[Report Service] Fetching all reports')
//     const q = query(
//       collection(db, 'reports'),
//       where('userId', '==', auth.currentUser?.uid)
//     )
//     const snapshot = await getDocs(q)
//     const reports = snapshot.docs.map(doc => {
//       const data = doc.data()
//       return {
//         id: doc.id,
//         ...data,
//         startDate: data.startDate?.toDate(),
//         endDate: data.endDate?.toDate(),
//         createdAt: data.createdAt?.toDate(),
//         updatedAt: data.updatedAt?.toDate(),
//         tasks: data.tasks || [],
//         blockers: data.blockers || [],
//         nextWeekObjectives: data.nextWeekObjectives || []
//       }
//     }) as Report[]
//     return reports.sort((a, b) => b.weekNumber - a.weekNumber)
//   }
// lib/services/report-service.ts
__turbopack_context__.s([
    "createReport",
    ()=>createReport,
    "deleteReport",
    ()=>deleteReport,
    "getAllReports",
    ()=>getAllReports,
    "getReportById",
    ()=>getReportById,
    "getReportsByProject",
    ()=>getReportsByProject,
    "updateReport",
    ()=>updateReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
async function createReport(data) {
    console.log('[Report Service] Creating report:', data);
    console.log('[Report Service] Current user:', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid);
    // Vérification doublon par weekNumber
    const existingWeekQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', data.projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('weekNumber', '==', data.weekNumber));
    const existingWeekSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(existingWeekQuery);
    console.log('[Report Service] Found by weekNumber:', existingWeekSnapshot.size);
    if (!existingWeekSnapshot.empty) {
        const existingId = existingWeekSnapshot.docs[0].id;
        console.log('[Report Service] Duplicate found:', existingId);
        throw new Error(`Un rapport existe déjà pour la semaine ${data.weekNumber} de ce projet (ID: ${existingId})`);
    }
    // Vérification doublon par dates
    const startTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(new Date(data.startDate));
    const endTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(new Date(data.endDate));
    const existingDatesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', data.projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('startDate', '==', startTimestamp), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('endDate', '==', endTimestamp));
    const existingDatesSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(existingDatesQuery);
    console.log('[Report Service] Found by dates:', existingDatesSnapshot.size);
    if (!existingDatesSnapshot.empty) {
        const existingId = existingDatesSnapshot.docs[0].id;
        console.log('[Report Service] Duplicate found:', existingId);
        throw new Error(`Un rapport existe déjà pour la période du ${new Date(data.startDate).toLocaleDateString('fr-FR')} au ${new Date(data.endDate).toLocaleDateString('fr-FR')} (ID: ${existingId}).`);
    }
    // Créer le rapport
    const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports'), {
        projectId: data.projectId,
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid,
        weekNumber: data.weekNumber,
        startDate: startTimestamp,
        endDate: endTimestamp,
        status: 'Draft',
        currentStep: data.currentStep || 0,
        summary: data.summary || '',
        tasks: data.tasks || [],
        blockers: data.blockers || [],
        nextWeekObjectives: data.nextWeekObjectives || [],
        createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Report Service] Report created with ID:', docRef.id);
    return docRef.id;
}
async function updateReport(reportId, data) {
    console.log('[Report Service] Updating report:', reportId, data);
    const reportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports', reportId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(reportRef, {
        ...data,
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Report Service] Report updated');
}
async function getReportsByProject(projectId) {
    console.log('[Report Service] Fetching reports for project:', projectId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    console.log('[Report Service] Query returned:', snapshot.docs.length, 'documents');
    const reports = snapshot.docs.map((doc)=>{
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            startDate: data.startDate?.toDate(),
            endDate: data.endDate?.toDate(),
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate()
        };
    });
    const sorted = reports.sort((a, b)=>b.weekNumber - a.weekNumber);
    console.log('[Report Service] Returning reports:', sorted);
    return sorted;
}
async function getReportById(reportId) {
    console.log('[Report Service] Fetching report:', reportId);
    try {
        const reportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports', reportId);
        const reportSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(reportRef);
        if (!reportSnap.exists()) {
            return null;
        }
        const data = reportSnap.data();
        if (data.userId !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid) {
            return null;
        }
        return {
            id: reportSnap.id,
            ...data,
            startDate: data.startDate?.toDate(),
            endDate: data.endDate?.toDate(),
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate(),
            tasks: data.tasks || [],
            blockers: data.blockers || [],
            nextWeekObjectives: data.nextWeekObjectives || []
        };
    } catch (error) {
        console.error('[Report Service] Error fetching report:', error);
        throw error;
    }
}
async function getAllReports() {
    console.log('[Report Service] Fetching all reports');
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const reports = snapshot.docs.map((doc)=>{
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            startDate: data.startDate?.toDate(),
            endDate: data.endDate?.toDate(),
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate(),
            tasks: data.tasks || [],
            blockers: data.blockers || [],
            nextWeekObjectives: data.nextWeekObjectives || []
        };
    });
    return reports.sort((a, b)=>b.weekNumber - a.weekNumber);
}
async function deleteReport(reportId) {
    console.log('[Report Service] Deleting report:', reportId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports', reportId));
    console.log('[Report Service] Report deleted');
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/project-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // lib/services/project-service.ts
// import { collection, addDoc, getDocs, updateDoc, doc, query, where, Timestamp, getDoc } from 'firebase/firestore'
// import { db, auth } from '@/lib/firebase'
// export interface Project {
//   id: string
//   companyId: string
//   userId: string
//   name: string
//   type: 'Web App' | 'Mobile App' | 'Website' | 'Social Media Campaign'
//   client?: string
//   description?: string
//   startDate: Date
//   status: 'Open' | 'Completed'
//   analysisComplete: boolean
//   reportsCount: number
//   progress: number
//   createdAt: Date
//   updatedAt: Date
// }
// export async function createProject(data: {
//   companyId: string
//   name: string
//   type: Project['type']
//   client?: string
//   startDate: string
// }) {
//   console.log('[Project Service] Creating project:', data)
//   // Vérifier les doublons
//   const existingQuery = query(
//     collection(db, 'projects'),
//     where('companyId', '==', data.companyId),
//     where('userId', '==', auth.currentUser?.uid),
//     where('name', '==', data.name),
//     where('type', '==', data.type),
//     where('client', '==', data.client || null)
//   )
//   const existingSnapshot = await getDocs(existingQuery)
//   if (!existingSnapshot.empty) {
//     throw new Error('Un projet avec ce nom, type et client existe déjà')
//   }
//   const startDateTimestamp = Timestamp.fromDate(new Date(data.startDate))
//   const docRef = await addDoc(collection(db, 'projects'), {
//     companyId: data.companyId,
//     name: data.name,
//     type: data.type,
//     client: data.client || null,
//     startDate: startDateTimestamp,
//     userId: auth.currentUser?.uid,
//     status: 'Open',
//     analysisComplete: false,
//     reportsCount: 0,
//     progress: 0,
//     createdAt: Timestamp.now(),
//     updatedAt: Timestamp.now()
//   })
//   console.log('[Project Service] Project created with ID:', docRef.id)
//   return docRef.id
// }
// export async function updateProject(
//   projectId: string,
//   data: {
//     name: string
//     type: Project['type']
//     client?: string
//     startDate: string
//   }
// ) {
//   console.log('[Project Service] Updating project:', projectId, data)
//   // Récupérer le projet actuel pour vérifier les doublons
//   const projectRef = doc(db, 'projects', projectId)
//   // Vérifier les doublons (exclure le projet en cours de modification)
//   const existingQuery = query(
//     collection(db, 'projects'),
//     where('userId', '==', auth.currentUser?.uid),
//     where('name', '==', data.name),
//     where('type', '==', data.type),
//     where('client', '==', data.client || null)
//   )
//   const existingSnapshot = await getDocs(existingQuery)
//   const hasDuplicate = existingSnapshot.docs.some(doc => doc.id !== projectId)
//   if (hasDuplicate) {
//     throw new Error('Un projet avec ce nom, type et client existe déjà')
//   }
//   const startDateTimestamp = Timestamp.fromDate(new Date(data.startDate))
//   await updateDoc(projectRef, {
//     name: data.name,
//     type: data.type,
//     client: data.client || null,
//     startDate: startDateTimestamp,
//     updatedAt: Timestamp.now()
//   })
//   console.log('[Project Service] Project updated')
// }
// export async function getProjectsByCompany(companyId: string): Promise<Project[]> {
//   console.log('[Project Service] Fetching projects for company:', companyId)
//   console.log('[Project Service] Current user:', auth.currentUser?.uid)
//   const q = query(
//     collection(db, 'projects'),
//     where('companyId', '==', companyId),
//     where('userId', '==', auth.currentUser?.uid)
//   )
//   console.log('[Project Service] Executing query...')
//   const snapshot = await getDocs(q)
//   console.log('[Project Service] Query returned:', snapshot.docs.length, 'documents')
//   const projects = snapshot.docs.map(doc => {
//     const data = doc.data()
//     console.log('[Project Service] Processing document:', doc.id, data)
//     return {
//       id: doc.id,
//       ...data,
//       startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
//       createdAt: data.createdAt?.toDate(),
//       updatedAt: data.updatedAt?.toDate()
//     }
//   }) as Project[]
//   console.log('[Project Service] Mapped projects:', projects)
//   const sorted = projects.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
//   console.log('[Project Service] Returning projects:', sorted)
//   return sorted
// }
// export async function getProjectById(projectId: string): Promise<Project | null> {
//     console.log('[Project Service] getProjectById called with:', projectId)
//     console.log('[Project Service] Current user:', auth.currentUser?.uid)
//     try {
//       const projectRef = doc(db, 'projects', projectId)
//       console.log('[Project Service] Project ref created:', projectRef.path)
//       const projectSnap = await getDoc(projectRef)
//       console.log('[Project Service] getDoc completed, exists:', projectSnap.exists())
//       if (!projectSnap.exists()) {
//         console.log('[Project Service] Project not found in Firestore')
//         return null
//       }
//       const data = projectSnap.data()
//       console.log('[Project Service] Raw project data:', data)
//       // Vérifier que le projet appartient à l'utilisateur actuel
//       if (data.userId !== auth.currentUser?.uid) {
//         console.warn('[Project Service] Project does not belong to current user')
//         console.log('[Project Service] Project userId:', data.userId)
//         console.log('[Project Service] Current userId:', auth.currentUser?.uid)
//         return null
//       }
//       const project = {
//         id: projectSnap.id,
//         ...data,
//         startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
//         createdAt: data.createdAt?.toDate(),
//         updatedAt: data.updatedAt?.toDate()
//       } as Project
//       console.log('[Project Service] Returning project:', project)
//       return project
//     } catch (error) {
//       console.error('[Project Service] Error fetching project:', error)
//       throw error
//     }
//   }
//   export async function updateProjectProgress(projectId: string) {
//     console.log('[Project Service] Updating project progress:', projectId)
//     // Compter les analyses terminées
//     const analysesQuery = query(
//       collection(db, 'analyses'),
//       where('projectId', '==', projectId),
//       where('userId', '==', auth.currentUser?.uid)
//     )
//     const analysesSnap = await getDocs(analysesQuery)
//     const analyses = analysesSnap.docs.map(doc => doc.data())
//     const completedAnalyses = analyses.filter(a => a.status === 'Completed').length
//     const hasAtLeastOneCompleted = completedAnalyses > 0
//     // Compter les rapports publiés
//     const reportsQuery = query(
//       collection(db, 'reports'),
//       where('projectId', '==', projectId),
//       where('userId', '==', auth.currentUser?.uid),
//       where('status', '==', 'Published')
//     )
//     const reportsSnap = await getDocs(reportsQuery)
//     const reportsCount = reportsSnap.size
//     const progress = Math.min(Math.round((completedAnalyses / 4) * 100), 100)
//     const projectRef = doc(db, 'projects', projectId)
//     await updateDoc(projectRef, {
//       analysisComplete: hasAtLeastOneCompleted,
//       progress: progress,
//       reportsCount: reportsCount,
//       updatedAt: Timestamp.now()
//     })
//     console.log('[Project Service] Project progress updated:', {
//       completedAnalyses,
//       hasAtLeastOneCompleted,
//       progress,
//       reportsCount
//     })
//   }
// lib/services/project-service.ts
__turbopack_context__.s([
    "completeAnalysisPhase",
    ()=>completeAnalysisPhase,
    "createProject",
    ()=>createProject,
    "getProjectById",
    ()=>getProjectById,
    "getProjectsByCompany",
    ()=>getProjectsByCompany,
    "updateProject",
    ()=>updateProject,
    "updateProjectProgress",
    ()=>updateProjectProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
async function createProject(data) {
    console.log('[Project Service] Creating project:', data);
    // Vérifier les doublons
    const existingQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('companyId', '==', data.companyId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('name', '==', data.name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('type', '==', data.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('client', '==', data.client || null));
    const existingSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(existingQuery);
    if (!existingSnapshot.empty) {
        throw new Error('Un projet avec ce nom, type et client existe déjà');
    }
    const startDateTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(new Date(data.startDate));
    const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects'), {
        companyId: data.companyId,
        name: data.name,
        type: data.type,
        client: data.client || null,
        startDate: startDateTimestamp,
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid,
        status: 'Open',
        analysisProgress: 0,
        analysisComplete: false,
        reportsCount: 0,
        createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now(),
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Project Service] Project created with ID:', docRef.id);
    return docRef.id;
}
async function updateProject(projectId, data) {
    console.log('[Project Service] Updating project:', projectId, data);
    // Récupérer le projet actuel pour vérifier les doublons
    const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects', projectId);
    // Vérifier les doublons (exclure le projet en cours de modification)
    const existingQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('name', '==', data.name), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('type', '==', data.type), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('client', '==', data.client || null));
    const existingSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(existingQuery);
    const hasDuplicate = existingSnapshot.docs.some((doc)=>doc.id !== projectId);
    if (hasDuplicate) {
        throw new Error('Un projet avec ce nom, type et client existe déjà');
    }
    const startDateTimestamp = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].fromDate(new Date(data.startDate));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(projectRef, {
        name: data.name,
        type: data.type,
        client: data.client || null,
        startDate: startDateTimestamp,
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Project Service] Project updated');
}
async function getProjectsByCompany(companyId) {
    console.log('[Project Service] Fetching projects for company:', companyId);
    console.log('[Project Service] Current user:', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('companyId', '==', companyId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    console.log('[Project Service] Executing query...');
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    console.log('[Project Service] Query returned:', snapshot.docs.length, 'documents');
    const projects = snapshot.docs.map((doc)=>{
        const data = doc.data();
        console.log('[Project Service] Processing document:', doc.id, data);
        return {
            id: doc.id,
            ...data,
            startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate()
        };
    });
    console.log('[Project Service] Mapped projects:', projects);
    const sorted = projects.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime());
    console.log('[Project Service] Returning projects:', sorted);
    return sorted;
}
async function getProjectById(projectId) {
    console.log('[Project Service] getProjectById called with:', projectId);
    console.log('[Project Service] Current user:', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid);
    try {
        const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects', projectId);
        console.log('[Project Service] Project ref created:', projectRef.path);
        const projectSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDoc"])(projectRef);
        console.log('[Project Service] getDoc completed, exists:', projectSnap.exists());
        if (!projectSnap.exists()) {
            console.log('[Project Service] Project not found in Firestore');
            return null;
        }
        const data = projectSnap.data();
        console.log('[Project Service] Raw project data:', data);
        // Vérifier que le projet appartient à l'utilisateur actuel
        if (data.userId !== __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid) {
            console.warn('[Project Service] Project does not belong to current user');
            console.log('[Project Service] Project userId:', data.userId);
            console.log('[Project Service] Current userId:', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid);
            return null;
        }
        const project = {
            id: projectSnap.id,
            ...data,
            startDate: data.startDate?.toDate ? data.startDate.toDate() : new Date(data.startDate),
            createdAt: data.createdAt?.toDate(),
            updatedAt: data.updatedAt?.toDate()
        };
        console.log('[Project Service] Returning project:', project);
        return project;
    } catch (error) {
        console.error('[Project Service] Error fetching project:', error);
        throw error;
    }
}
async function updateProjectProgress(projectId) {
    console.log('[Project Service] Updating project progress:', projectId);
    const analysesQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'analyses'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    const analysesSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(analysesQuery);
    const analyses = analysesSnap.docs.map((doc)=>doc.data());
    const totalAnalyses = analyses.length;
    const completedAnalyses = analyses.filter((a)=>a.status === 'Completed').length;
    const analysisProgress = totalAnalyses > 0 ? Math.round(completedAnalyses / totalAnalyses * 100) : 0;
    const reportsQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'reports'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('status', '==', 'Published'));
    const reportsSnap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(reportsQuery);
    const reportsCount = reportsSnap.size;
    // ✅ Bouclage automatique si 4 analyses terminées
    const shouldAutoComplete = completedAnalyses === 4;
    const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects', projectId);
    const updateData = {
        analysisProgress,
        reportsCount,
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    };
    // ✅ Ne modifier analysisComplete que si auto-bouclage
    if (shouldAutoComplete) {
        updateData.analysisComplete = true;
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(projectRef, updateData);
    console.log('[Project Service] Project progress updated:', {
        totalAnalyses,
        completedAnalyses,
        analysisProgress,
        reportsCount,
        autoCompleted: shouldAutoComplete
    });
}
async function completeAnalysisPhase(projectId) {
    console.log('[Project Service] Completing analysis phase for project:', projectId);
    const projectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projects', projectId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateDoc"])(projectRef, {
        analysisComplete: true,
        updatedAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Project Service] Analysis phase marked as complete');
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/hooks/use-reports.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/use-reports.ts
__turbopack_context__.s([
    "useAllReports",
    ()=>useAllReports,
    "useCreateReport",
    ()=>useCreateReport,
    "useDeleteReport",
    ()=>useDeleteReport,
    "useReport",
    ()=>useReport,
    "useReports",
    ()=>useReports,
    "useUpdateReport",
    ()=>useUpdateReport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/report-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$project$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/project-service.ts [app-ssr] (ecmascript)");
;
;
;
;
;
function useReports(projectId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'reports',
            projectId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportsByProject"])(projectId),
        enabled: !!projectId,
        staleTime: 1000 * 60 * 5
    });
}
function useReport(reportId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'report',
            reportId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getReportById"])(reportId),
        enabled: !!reportId,
        staleTime: 1000 * 60 * 5
    });
}
function useCreateReport() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createReport"],
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'reports',
                    variables.projectId
                ]
            });
        }
    });
}
function useUpdateReport() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: ({ reportId, projectId, data })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateReport"])(reportId, data),
        onSuccess: async (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'report',
                    variables.reportId
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'reports',
                    variables.projectId
                ]
            });
            // Si publié, mettre à jour le compteur de rapports du projet
            if (variables.data.status === 'Published') {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$project$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateProjectProgress"])(variables.projectId);
            }
        }
    });
}
function useAllReports() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'reports',
            'all'
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAllReports"],
        staleTime: 1000 * 60 * 5
    });
}
function useDeleteReport() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$report$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteReport"],
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'reports'
                ]
            });
        }
    });
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/member-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/services/member-service.ts
__turbopack_context__.s([
    "createMember",
    ()=>createMember,
    "deleteMember",
    ()=>deleteMember,
    "getMembersByCompany",
    ()=>getMembersByCompany
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/firebase.ts [app-ssr] (ecmascript)");
;
;
async function createMember(data) {
    console.log('[Member Service] Creating member:', data);
    const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'members'), {
        companyId: data.companyId,
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid,
        name: data.name,
        email: data.email,
        role: data.role,
        createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Member Service] Member created with ID:', docRef.id);
    return docRef.id;
}
async function getMembersByCompany(companyId) {
    console.log('[Member Service] Fetching members for company:', companyId);
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'members'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('companyId', '==', companyId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    const members = snapshot.docs.map((doc)=>{
        const data = doc.data();
        return {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate()
        };
    });
    return members.sort((a, b)=>a.name.localeCompare(b.name));
}
async function deleteMember(memberId) {
    console.log('[Member Service] Deleting member:', memberId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'members', memberId));
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/project-member-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/services/project-member-service.ts
__turbopack_context__.s([
    "addMemberToProject",
    ()=>addMemberToProject,
    "getProjectMembers",
    ()=>getProjectMembers,
    "removeMemberFromProject",
    ()=>removeMemberFromProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/firebase/firestore/dist/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@firebase/firestore/dist/index.node.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/firebase.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$member$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/member-service.ts [app-ssr] (ecmascript)");
;
;
;
async function addMemberToProject(data) {
    console.log('[Project Member Service] Adding member to project:', data);
    // Vérifier si le membre est déjà assigné
    const existingQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projectMembers'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', data.projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('memberId', '==', data.memberId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    const existingSnapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(existingQuery);
    if (!existingSnapshot.empty) {
        throw new Error('Ce membre est déjà assigné à ce projet');
    }
    const docRef = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projectMembers'), {
        projectId: data.projectId,
        memberId: data.memberId,
        companyId: data.companyId,
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid,
        role: data.role || null,
        createdAt: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Timestamp"].now()
    });
    console.log('[Project Member Service] Member added with ID:', docRef.id);
    return docRef.id;
}
async function removeMemberFromProject(projectMemberId) {
    console.log('[Project Member Service] Removing member from project:', projectMemberId);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projectMembers', projectMemberId));
    console.log('[Project Member Service] Member removed');
}
async function getProjectMembers(projectId) {
    console.log('[Project Member Service] Fetching members for project:', projectId);
    // Récupérer les assignations
    const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"], 'projectMembers'), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('projectId', '==', projectId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["where"])('userId', '==', __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$firebase$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["auth"].currentUser?.uid));
    const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDocs"])(q);
    if (snapshot.empty) {
        return [];
    }
    const projectMembers = snapshot.docs.map((doc)=>({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate()
        }));
    // Récupérer les détails des membres
    const companyId = projectMembers[0]?.companyId;
    if (!companyId) return [];
    const allMembers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$member$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMembersByCompany"])(companyId);
    // Joindre les données
    const membersWithDetails = projectMembers.map((pm)=>{
        const member = allMembers.find((m)=>m.id === pm.memberId);
        return {
            ...pm,
            memberName: member?.name || 'Membre inconnu',
            memberEmail: member?.email || '',
            memberRole: member?.role || ''
        };
    });
    return membersWithDetails.sort((a, b)=>a.memberName.localeCompare(b.memberName));
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/hooks/use-project-members.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// hooks/use-project-members.ts
__turbopack_context__.s([
    "useAddMemberToProject",
    ()=>useAddMemberToProject,
    "useProjectMembers",
    ()=>useProjectMembers,
    "useRemoveMemberFromProject",
    ()=>useRemoveMemberFromProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$project$2d$member$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/lib/services/project-member-service.ts [app-ssr] (ecmascript)");
;
;
function useProjectMembers(projectId) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'projectMembers',
            projectId
        ],
        queryFn: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$project$2d$member$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getProjectMembers"])(projectId),
        enabled: !!projectId,
        staleTime: 1000 * 60 * 5
    });
}
function useAddMemberToProject() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$project$2d$member$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addMemberToProject"],
        onSuccess: (_, variables)=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'projectMembers',
                    variables.projectId
                ]
            });
        }
    });
}
function useRemoveMemberFromProject() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$lib$2f$services$2f$project$2d$member$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeMemberFromProject"],
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    'projectMembers'
                ]
            });
        }
    });
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // components/report-detail-view.tsx
// "use client"
// import * as React from "react"
// import { ArrowLeft, Calendar, CheckCircle2, AlertCircle, User, AlertTriangle, Target, FileText } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { useRouter } from "next/navigation"
// import { useReport } from "@/hooks/use-reports"
// import { useProjectMembers } from "@/hooks/use-project-members"
// import { Skeleton } from "@/components/ui/skeleton"
// import Link from "next/link"
// type ReportDetailViewProps = {
//   projectId: string
//   reportId: string
// }
// const getBlockerLevelColor = (level: string) => {
//   switch (level) {
//     case 'high': return 'bg-red-500/10 text-red-500 border-red-500/20'
//     case 'medium': return 'bg-orange-500/10 text-orange-500 border-orange-500/20'
//     case 'low': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
//     default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
//   }
// }
// const translateBlockerLevel = (level: string) => {
//   switch (level) {
//     case 'high': return 'Élevé'
//     case 'medium': return 'Moyen'
//     case 'low': return 'Bas'
//     default: return level
//   }
// }
// export function ReportDetailView({ projectId, reportId }: ReportDetailViewProps) {
//   const router = useRouter()
//   const { data: report, isLoading, error } = useReport(reportId)
//   const { data: projectMembersData = [] } = useProjectMembers(report?.projectId || null)
//   if (isLoading) {
//     return (
//       <div className="space-y-6">
//         <div className="flex items-center gap-4">
//           <Skeleton className="h-10 w-10" />
//           <div className="flex-1">
//             <Skeleton className="h-9 w-96 mb-2" />
//             <Skeleton className="h-4 w-64" />
//           </div>
//         </div>
//         <div className="grid gap-6 md:grid-cols-2">
//           <Skeleton className="h-32" />
//           <Skeleton className="h-32" />
//         </div>
//         <Skeleton className="h-64" />
//       </div>
//     )
//   }
//   if (error || !report) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="text-center space-y-4">
//           <p className="text-muted-foreground">Rapport introuvable</p>
//           <Button asChild>
//             <Link href={`/project/${projectId}/reports`}>Retour aux rapports</Link>
//           </Button>
//         </div>
//       </div>
//     )
//   }
//   const getMemberName = (memberId?: string) => {
//     if (!memberId) return "Non assignée"
//     const projectMember = projectMembersData.find(pm => pm.memberId === memberId)
//     return projectMember ? projectMember.memberName : "Membre inconnu"
//   }
//   const totalTasks = report.tasks?.length || 0
//   const completedCount = report.tasks?.filter(t => t.completed).length || 0
//   const completionRate = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0
//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-4">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => router.back()}
//           >
//             <ArrowLeft className="h-5 w-5" />
//           </Button>
//           <div>
//             <div className="flex items-center gap-3">
//               <h1 className="text-3xl font-semibold tracking-tight text-foreground">
//                 Semaine #{report.weekNumber}
//               </h1>
//               <Badge
//                 variant={report.status === "Published" ? "default" : "secondary"}
//                 className={
//                   report.status === "Published"
//                     ? "bg-green-500/10 text-green-500 border-green-500/20"
//                     : "bg-gray-500/10 text-gray-500 border-gray-500/20"
//                 }
//               >
//                 {report.status === "Published" ? "Publié" : "Brouillon"}
//               </Badge>
//             </div>
//             <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
//               <Calendar className="h-4 w-4" />
//               <span>
//                 {new Date(report.startDate).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long'
//                 })}
//                 {' - '}
//                 {new Date(report.endDate).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long',
//                   year: 'numeric'
//                 })}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Statistiques */}
//       <div className="grid gap-6 md:grid-cols-3">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Total Tâches</CardTitle>
//             <FileText className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold">{totalTasks}</div>
//             <p className="text-xs text-muted-foreground mt-1">
//               Tâches de la semaine
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Tâches Complétées</CardTitle>
//             <CheckCircle2 className="h-4 w-4 text-green-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold text-green-500">{completedCount}</div>
//             <p className="text-xs text-muted-foreground mt-1">
//               Taux : {completionRate}%
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle className="text-sm font-medium">Blocages Signalés</CardTitle>
//             <AlertTriangle className="h-4 w-4 text-amber-500" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-3xl font-bold text-amber-500">
//               {report.blockers?.length || 0}
//             </div>
//             <p className="text-xs text-muted-foreground mt-1">
//               Défis identifiés
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//       {/* Résumé */}
//       {report.summary && (
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <FileText className="h-5 w-5" />
//               Résumé Hebdomadaire
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-sm whitespace-pre-wrap leading-relaxed">{report.summary}</p>
//           </CardContent>
//         </Card>
//       )}
//       {/* Tâches & Blocages */}
//       <div className="grid gap-6 lg:grid-cols-2">
//         {/* Tâches */}
//         {report.tasks && report.tasks.length > 0 && (
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <CheckCircle2 className="h-5 w-5" />
//                 Tâches de la Semaine
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {report.tasks.map((task) => (
//                   <Card key={task.id} className={`${task.completed ? "bg-muted/30" : "bg-card"}`}>
//                     <CardContent className="p-4">
//                       <div className="flex items-start gap-3">
//                         <CheckCircle2 
//                           className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
//                             task.completed ? "text-green-500" : "text-muted-foreground"
//                           }`}
//                         />
//                         <div className="flex-1 space-y-2">
//                           <p className={`text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`}>
//                             {task.description}
//                           </p>
//                           {task.assignedTo && (
//                             <div className="flex items-center gap-2">
//                               <Badge variant="outline" className="text-xs">
//                                 <User className="h-3 w-3 mr-1" />
//                                 {getMemberName(task.assignedTo)}
//                               </Badge>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}
//         {/* Blocages */}
//         {report.blockers && report.blockers.length > 0 && (
//           <Card className="border-red-500/50">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2 text-red-500">
//                 <AlertTriangle className="h-5 w-5" />
//                 Blocages & Défis
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {report.blockers.map((blocker, index) => (
//                   <Card key={index} className="border-red-500/30">
//                     <CardContent className="p-4 space-y-3">
//                       <div className="flex items-start gap-2">
//                         <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
//                         <div className="flex-1 space-y-2">
//                           <p className="text-sm font-medium">{blocker.description}</p>
//                           <Badge variant="outline" className={getBlockerLevelColor(blocker.level)}>
//                             {translateBlockerLevel(blocker.level)}
//                           </Badge>
//                           {blocker.mitigation && (
//                             <div className="mt-3 p-3 bg-muted/50 rounded-md">
//                               <p className="text-xs font-semibold text-muted-foreground mb-1">
//                                 Action de mitigation :
//                               </p>
//                               <p className="text-sm">{blocker.mitigation}</p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//       {/* Objectifs Semaine Prochaine */}
//       {report.nextWeekObjectives && report.nextWeekObjectives.length > 0 && (
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Target className="h-5 w-5" />
//               Objectifs Semaine Prochaine
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-3 md:grid-cols-2">
//               {report.nextWeekObjectives.map((objective, index) => (
//                 <div key={index} className="flex items-start gap-2 p-3 rounded-lg bg-muted/30">
//                   <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
//                     <span className="text-xs font-semibold">{index + 1}</span>
//                   </div>
//                   <span className="text-sm flex-1">{objective}</span>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       )}
//       {/* Métadonnées */}
//       <Card className="bg-muted/30">
//         <CardContent className="pt-6">
//           <div className="grid gap-4 md:grid-cols-2">
//             <div className="flex items-center justify-between">
//               <span className="text-sm text-muted-foreground">Créé le</span>
//               <span className="text-sm font-medium">
//                 {new Date(report.createdAt).toLocaleDateString('fr-FR', {
//                   day: 'numeric',
//                   month: 'long',
//                   year: 'numeric',
//                   hour: '2-digit',
//                   minute: '2-digit'
//                 })}
//               </span>
//             </div>
//             {report.updatedAt && (
//               <div className="flex items-center justify-between">
//                 <span className="text-sm text-muted-foreground">Dernière modification</span>
//                 <span className="text-sm font-medium">
//                   {new Date(report.updatedAt).toLocaleDateString('fr-FR', {
//                     day: 'numeric',
//                     month: 'long',
//                     year: 'numeric',
//                     hour: '2-digit',
//                     minute: '2-digit'
//                   })}
//                 </span>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }
// components/report-detail-view.tsx
__turbopack_context__.s([
    "ReportDetailView",
    ()=>ReportDetailView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$hooks$2f$use$2d$reports$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/hooks/use-reports.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$hooks$2f$use$2d$project$2d$members$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/hooks/use-project-members.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/components/ui/skeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const getBlockerLevelColor = (level)=>{
    switch(level){
        case 'high':
            return 'bg-red-500/10 text-red-500 border-red-500/20';
        case 'medium':
            return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
        case 'low':
            return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
        default:
            return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
};
const translateBlockerLevel = (level)=>{
    switch(level){
        case 'high':
            return 'Élevé';
        case 'medium':
            return 'Moyen';
        case 'low':
            return 'Bas';
        default:
            return level;
    }
};
function ReportDetailView({ projectId, reportId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: report, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$hooks$2f$use$2d$reports$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReport"])(reportId);
    const { data: projectMembersData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$hooks$2f$use$2d$project$2d$members$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProjectMembers"])(report?.projectId || null);
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-10 w-10"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 386,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-9 w-96 mb-2"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 388,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                                    className: "h-4 w-64"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 389,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 387,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                            className: "h-32"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 395,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                    lineNumber: 392,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$skeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    className: "h-64"
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
            lineNumber: 384,
            columnNumber: 7
        }, this);
    }
    if (error || !report) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-muted-foreground",
                        children: "Rapport introuvable"
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/project/${projectId}/reports`,
                            children: "Retour aux rapports"
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 407,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
            lineNumber: 404,
            columnNumber: 7
        }, this);
    }
    const getMemberName = (memberId)=>{
        if (!memberId) return "Non assignée";
        const projectMember = projectMembersData.find((pm)=>pm.memberId === memberId);
        return projectMember ? projectMember.memberName : "Membre inconnu";
    };
    const totalTasks = report.tasks?.length || 0;
    const completedCount = report.tasks?.filter((t)=>t.completed).length || 0;
    const completionRate = totalTasks > 0 ? Math.round(completedCount / totalTasks * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: ()=>router.back(),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-5 w-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 435,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 430,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl font-semibold tracking-tight text-foreground",
                                            children: [
                                                "Semaine #",
                                                report.weekNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 439,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: report.status === "Published" ? "default" : "secondary",
                                            className: report.status === "Published" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-gray-500/10 text-gray-500 border-gray-500/20",
                                            children: report.status === "Published" ? "Publié" : "Brouillon"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 438,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mt-2 text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 454,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                new Date(report.startDate).toLocaleDateString('fr-FR', {
                                                    day: 'numeric',
                                                    month: 'long'
                                                }),
                                                ' - ',
                                                new Date(report.endDate).toLocaleDateString('fr-FR', {
                                                    day: 'numeric',
                                                    month: 'long',
                                                    year: 'numeric'
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 455,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 437,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                    lineNumber: 429,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 428,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 md:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Total Tâches"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-4 w-4 text-muted-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold",
                                        children: totalTasks
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 480,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: "Tâches de la semaine"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Tâches Complétées"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        className: "h-4 w-4 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 488,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-green-500",
                                        children: completedCount
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: [
                                            "Taux : ",
                                            completionRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 494,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 487,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "flex flex-row items-center justify-between pb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                        className: "text-sm font-medium",
                                        children: "Blocages Signalés"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "h-4 w-4 text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 501,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-3xl font-bold text-amber-500",
                                        children: report.blockers?.length || 0
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-muted-foreground mt-1",
                                        children: "Défis identifiés"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 509,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 505,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 500,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 473,
                columnNumber: 7
            }, this),
            report.summary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 521,
                                    columnNumber: 15
                                }, this),
                                "Résumé Hebdomadaire"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 520,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 519,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm whitespace-pre-wrap leading-relaxed",
                            children: report.summary
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 525,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 518,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-2",
                children: [
                    report.tasks && report.tasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        "Tâches de la Semaine",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "ml-auto",
                                            children: report.tasks.length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 540,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 537,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 536,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-3 ${report.tasks.length > 10 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`,
                                    children: report.tasks.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            className: `${task.completed ? "bg-muted/30" : "bg-card"}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            className: `h-5 w-5 flex-shrink-0 mt-0.5 ${task.completed ? "text-green-500" : "text-muted-foreground"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm ${task.completed ? "line-through text-muted-foreground" : ""}`,
                                                                    children: task.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                    lineNumber: 555,
                                                                    columnNumber: 27
                                                                }, this),
                                                                task.assignedTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                        variant: "outline",
                                                                        className: "text-xs",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                                className: "h-3 w-3 mr-1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                                lineNumber: 561,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            getMemberName(task.assignedTo)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                    lineNumber: 559,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                    lineNumber: 548,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                lineNumber: 547,
                                                columnNumber: 21
                                            }, this)
                                        }, task.id, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 546,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 544,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 543,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this),
                    report.blockers && report.blockers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                        className: "border-red-500/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "flex items-center gap-2 text-red-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this),
                                        "Blocages & Défis",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "secondary",
                                            className: "ml-auto",
                                            children: report.blockers.length
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 583,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `space-y-3 ${report.blockers.length > 5 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`,
                                    children: report.blockers.map((blocker, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                                            className: "border-red-500/30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                                                className: "p-4 space-y-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                            className: "h-5 w-5 text-red-500 flex-shrink-0 mt-0.5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                            lineNumber: 592,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-medium",
                                                                    children: blocker.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                    lineNumber: 594,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "outline",
                                                                    className: getBlockerLevelColor(blocker.level),
                                                                    children: translateBlockerLevel(blocker.level)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                    lineNumber: 595,
                                                                    columnNumber: 27
                                                                }, this),
                                                                blocker.mitigation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-3 p-3 bg-muted/50 rounded-md",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-semibold text-muted-foreground mb-1",
                                                                            children: "Action de mitigation :"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm",
                                                                            children: blocker.mitigation
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                            lineNumber: 603,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                            lineNumber: 593,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                    lineNumber: 591,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                lineNumber: 590,
                                                columnNumber: 21
                                            }, this)
                                        }, index, false, {
                                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                            lineNumber: 589,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 587,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 586,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 578,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 532,
                columnNumber: 7
            }, this),
            report.nextWeekObjectives && report.nextWeekObjectives.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 622,
                                    columnNumber: 15
                                }, this),
                                "Objectifs Semaine Prochaine",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "secondary",
                                    className: "ml-auto",
                                    children: report.nextWeekObjectives.length
                                }, void 0, false, {
                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                    lineNumber: 624,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 621,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 620,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${report.nextWeekObjectives.length > 20 ? 'max-h-[500px] overflow-y-auto pr-2' : ''}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 md:grid-cols-2 lg:grid-cols-3",
                                children: report.nextWeekObjectives.map((objective, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2 p-3 rounded-lg bg-muted/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 mt-0.5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-semibold",
                                                    children: index + 1
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                    lineNumber: 633,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                lineNumber: 632,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm flex-1",
                                                children: objective
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                                lineNumber: 635,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 631,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 629,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                            lineNumber: 628,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 627,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 619,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-muted/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "pt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Créé le"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: new Date(report.createdAt).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 648,
                                columnNumber: 13
                            }, this),
                            report.updatedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-muted-foreground",
                                        children: "Dernière modification"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        children: new Date(report.updatedAt).toLocaleDateString('fr-FR', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                        lineNumber: 663,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                                lineNumber: 661,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                        lineNumber: 647,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
                lineNumber: 645,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/report-detail-view.tsx",
        lineNumber: 426,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//components/auth-guard.tsx
__turbopack_context__.s([
    "AuthGuard",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/TECH LEAD/project-tracking-tool/contexts/auth-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function AuthGuard({ children }) {
    const { user, loading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!loading && !user) {
            console.log("[v0] No authenticated user, redirecting to login");
            router.push("/login");
        }
    }, [
        user,
        loading,
        router
    ]);
    // Show loading state while checking authentication
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/TECH LEAD/project-tracking-tool/components/auth-guard.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this);
    }
    // Don't render children if user is not authenticated
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$TECH__LEAD$2f$project$2d$tracking$2d$tool$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
];

//# sourceMappingURL=Documents_TECH%20LEAD_project-tracking-tool_3edd4d8f._.js.map