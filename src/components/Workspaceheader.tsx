import { Input } from "@/components/ui/input"
import { Search, Bell, User } from "lucide-react"

const WorkspaceHeader = () => {
  return (
    <header className="w-full bg-white px-4 py-2 border-b shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 justify-center md:justify-start w-full md:w-auto">
          <img src="/sidebar.png" width={18} height={18} alt="Sidebar Icon" />
          <div className="flex flex-wrap items-center text-xs text-gray-500">
            <span className="mr-1" onClick={() => console.log("Workspace clicked")}>Workspace</span>
            <span className="mr-1">&gt;</span>
            <span className="mr-1" onClick={() => console.log("Folder 2 clicked")}>Folder 2</span>
            <span className="mr-1">&gt;</span>
            <span className="text-black mr-1" onClick={() => console.log("Spreadsheet 3 clicked")}>Spreadsheet 3</span>
            <span className="pb-1">...</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-3 text-xs text-gray-600">
            <div className="relative bg-gray-100 rounded-md" onClick={() => console.log("Search clicked")}>
              <Search className="absolute left-2 top-2 h-3.5 w-3.5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search within sheet"
                className="pl-7 py-1.5 bg-gray-100 text-xs h-7 hover:shadow"
              />
            </div>

            <button
              onClick={() => console.log("Notifications clicked")}
              aria-label="Notifications"
              className="p-1.5 rounded hover:bg-gray-100 transition"
            >
              <Bell className="w-4 h-4 text-gray-600" />
            </button>

            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => console.log("Profile clicked")}
            >
              <div className="h-7 w-7 rounded-full bg-gray-200 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-600" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[13px] text-gray-700">John Doe</span>
                <span className="text-[11px] text-gray-500">john.doe@email.com</span>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default WorkspaceHeader
