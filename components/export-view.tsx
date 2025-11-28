// //components/export-view.tsx
// "use client"

// import * as React from "react"
// import { FileDown, FileText, FolderKanban, AlertTriangle } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Input } from "@/components/ui/input"
// import { Checkbox } from "@/components/ui/checkbox"

// export function ExportView() {
//   const [exportType, setExportType] = React.useState("")
//   const [selectedProject, setSelectedProject] = React.useState("")
//   const [selectedReport, setSelectedReport] = React.useState("")
//   const [dateFrom, setDateFrom] = React.useState("")
//   const [dateTo, setDateTo] = React.useState("")
//   const [includeLogo, setIncludeLogo] = React.useState(true)
//   const [isExporting, setIsExporting] = React.useState(false)

//   const handleExport = async () => {
//     setIsExporting(true)
//     // Simulate export
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     console.log("Exporting:", { exportType, selectedProject, selectedReport, dateFrom, dateTo, includeLogo })
//     setIsExporting(false)
//   }

//   const exportOptions = [
//     {
//       id: "single-report",
//       title: "Single Weekly Report",
//       description: "Export one weekly report as a professional PDF",
//       icon: FileText,
//     },
//     {
//       id: "project-summary",
//       title: "Complete Project Summary",
//       description: "Export full project documentation including analysis and all reports",
//       icon: FolderKanban,
//     },
//     {
//       id: "analysis-only",
//       title: "Analysis & Specifications",
//       description: "Export only the analysis and specifications document",
//       icon: FileText,
//     },
//     {
//       id: "all-reports",
//       title: "All Weekly Reports",
//       description: "Export all weekly reports for a project",
//       icon: FileText,
//     },
//     {
//       id: "blockers",
//       title: "Blockers Report",
//       description: "Export a summary of all blockers with resolution status",
//       icon: AlertTriangle,
//     },
//   ]

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center gap-3">
//         <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
//           <FileDown className="h-6 w-6 text-primary-foreground" />
//         </div>
//         <div>
//           <h1 className="text-3xl font-semibold tracking-tight text-card-foreground">Export & Download</h1>
//           <p className="text-sm text-muted-foreground">Export project documentation as professional PDFs.</p>
//         </div>
//       </div>

//       <div className="grid gap-6 lg:grid-cols-2">
//         <div className="space-y-4">
//           <Card className="bg-card">
//             <CardHeader>
//               <CardTitle className="text-card-foreground">Select Export Type</CardTitle>
//               <CardDescription>Choose what you want to export</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-3">
//               {exportOptions.map((option) => (
//                 <button
//                   key={option.id}
//                   onClick={() => setExportType(option.id)}
//                   className={`w-full rounded-lg border p-4 text-left transition-colors ${
//                     exportType === option.id
//                       ? "border-primary bg-primary/5"
//                       : "border-border bg-background hover:bg-muted/50"
//                   }`}
//                 >
//                   <div className="flex items-start gap-3">
//                     <div
//                       className={`flex h-10 w-10 items-center justify-center rounded-lg ${
//                         exportType === option.id ? "bg-primary text-primary-foreground" : "bg-muted"
//                       }`}
//                     >
//                       <option.icon className="h-5 w-5" />
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-medium text-foreground">{option.title}</p>
//                       <p className="text-sm text-muted-foreground">{option.description}</p>
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </CardContent>
//           </Card>
//         </div>

//         <div className="space-y-4">
//           <Card className="bg-card">
//             <CardHeader>
//               <CardTitle className="text-card-foreground">Export Options</CardTitle>
//               <CardDescription>Configure your export settings</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="grid gap-2">
//                 <Label htmlFor="project">Select Project</Label>
//                 <Select value={selectedProject} onValueChange={setSelectedProject}>
//                   <SelectTrigger id="project">
//                     <SelectValue placeholder="Choose a project" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="1">E-commerce Platform Redesign</SelectItem>
//                     <SelectItem value="2">Mobile Banking App</SelectItem>
//                     <SelectItem value="3">Social Media Campaign</SelectItem>
//                     <SelectItem value="4">Corporate Website (Completed)</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {exportType === "single-report" && (
//                 <div className="grid gap-2">
//                   <Label htmlFor="report">Select Weekly Report</Label>
//                   <Select value={selectedReport} onValueChange={setSelectedReport}>
//                     <SelectTrigger id="report">
//                       <SelectValue placeholder="Choose a report" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="1">Week 12 - March 18-22, 2025</SelectItem>
//                       <SelectItem value="2">Week 11 - March 11-15, 2025</SelectItem>
//                       <SelectItem value="3">Week 10 - March 4-8, 2025</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               )}

//               {(exportType === "all-reports" || exportType === "blockers") && (
//                 <>
//                   <div className="grid gap-2">
//                     <Label htmlFor="dateFrom">Date From (Optional)</Label>
//                     <Input id="dateFrom" type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="dateTo">Date To (Optional)</Label>
//                     <Input id="dateTo" type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
//                   </div>
//                 </>
//               )}

//               <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-4">
//                 <Checkbox
//                   id="logo"
//                   checked={includeLogo}
//                   onCheckedChange={(checked) => setIncludeLogo(checked as boolean)}
//                 />
//                 <Label htmlFor="logo" className="cursor-pointer text-sm">
//                   Include company logo in PDF
//                 </Label>
//               </div>

//               <Button
//                 onClick={handleExport}
//                 disabled={!exportType || !selectedProject || isExporting}
//                 className="w-full"
//                 size="lg"
//               >
//                 <FileDown className="mr-2 h-4 w-4" />
//                 {isExporting ? "Generating PDF..." : "Export to PDF"}
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="bg-card border-primary/20">
//             <CardHeader>
//               <CardTitle className="text-sm text-card-foreground">Export Features</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li className="flex items-start gap-2">
//                   <span className="text-primary">•</span>
//                   Professional formatting ready for executive presentation
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-primary">•</span>
//                   Includes charts, statistics, and visual summaries
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-primary">•</span>
//                   Optional company branding and logo
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="text-primary">•</span>
//                   Filtered by date range for custom reporting periods
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }
