"use client";

import { useState } from "react";
import Sidebar from "@/app/components/sidenavbar"; // adjust path as needed
import OverviewView from "../../components/overview";
import ProjectsView from "@/app/components/projectViewComponent";
import ImageView from "@/app/components/imageViewComponent";
/* ─── Animated gradient text keyframes ─────────────────────────────────── */
// Add this to your globals.css (or tailwind.config.js extend.keyframes):
//
// @keyframes gradientShift {
//   0%   { background-position: 0% 50%; }
//   50%  { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }
//
// Then in tailwind.config.js extend:
// animation: { 'gradient-shift': 'gradientShift 5s ease infinite' }
// backgroundSize: { '300': '300% 300%' }
//
// OR just use the <style> tag approach shown in OverviewView below.




/* ─── Dashboard shell ───────────────────────────────────────────────────── */
export default function Dashboard() 
{
    const [activeView, setActiveView] = useState<string>("overview");
    return (
        <div className="flex h-screen w-full bg-black overflow-hidden">
            <Sidebar activeView={activeView} onNavigate={setActiveView} />

            {/* Main content */}
            <main className="flex-1 overflow-y-auto relative">
                {/* Subtle ambient glow in top-left */}
                <div
                    className="pointer-events-none absolute top-0 left-0 w-[500px] h-[300px] opacity-10"
                    style={{
                        background:
                        "radial-gradient(ellipse at top left, #7c3aed 0%, transparent 70%)",
                    }}
                />
                <div className="relative z-10 h-full px-10 py-8">
                    {activeView == "overview" && <OverviewView/> }
                    {activeView == "projects" && <ProjectsView/>}
                    {activeView == "image" && <ImageView/>}
                    {activeView == "visitor" && <h1>Visitors is coming soon..</h1>}
                </div>
            </main>
            
        </div>
    )
}
