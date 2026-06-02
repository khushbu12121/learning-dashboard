import { Home, BookOpen, BarChart3, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-20 md:w-64 border-r border-zinc-800 p-4">
      <h2 className="hidden md:block text-xl font-bold mb-8">
        Dashboard
      </h2>

      <nav className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900">
          <Home size={20} />
          <span className="hidden md:block">Home</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg">
          <BookOpen size={20} />
          <span className="hidden md:block">Courses</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg">
          <BarChart3 size={20} />
          <span className="hidden md:block">Analytics</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg">
          <Settings size={20} />
          <span className="hidden md:block">Settings</span>
        </div>
      </nav>
    </aside>
  );
}