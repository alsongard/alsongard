"use client";

import { LayoutDashboard, FolderKanban, Image, Users, LogOut } from "lucide-react";

type NavItem = {
    label: string;
    view: string;
    icon: React.ReactNode;
};

const navItems: NavItem[] = [
    { label: "Overview", view: "overview", icon: <LayoutDashboard size={20} /> },
    { label: "Projects", view: "projects", icon: <FolderKanban   size={20} /> },
    { label: "Image",    view: "image",    icon: <Image          size={20} /> },
    { label: "Visitor",  view: "visitor",  icon: <Users          size={20} /> },
];

type SidebarProps = {
  activeView: string;
  onNavigate: (view: string) => void;
};

export default function Sidebar({ activeView, onNavigate }: SidebarProps) {
  return (
    <aside className="h-screen w-[220px] min-w-[220px] bg-[#0a0a0a] border-r border-white/[0.06] flex flex-col justify-between py-8 px-4">
      {/* Logo */}
      <div>
        <div className="mb-10 px-2">
          <span className="text-white font-bold tracking-widest text-sm uppercase">
            Port<span className="text-violet-400">folio</span>
          </span>
        </div>

        {/* Nav items */}
        <nav className="flex flex-col gap-y-1">
          {navItems.map((item) => {
            const isActive = activeView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => onNavigate(item.view)}
                className={`flex items-center gap-x-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200 w-full text-left
                  ${isActive
                    ? "bg-white/10 text-white"
                    : "text-white/40 hover:text-white/80 hover:bg-white/5"
                  }`}
              >
                <span className={isActive ? "text-violet-400" : ""}>{item.icon}</span>
                <span className="font-medium tracking-wide">{item.label}</span>
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={() => console.log("logout")}
        className="flex items-center gap-x-3 px-3 py-2.5 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 w-full"
      >
        <LogOut size={20} />
        <span className="font-medium tracking-wide">Logout</span>
      </button>
    </aside>
  );
}