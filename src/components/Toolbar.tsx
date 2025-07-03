import {
    SlidersHorizontal,
    Filter,
    EyeOff,
    Import,
    Upload,
    Share2,
    ChevronRight,
    Eye
  } from "lucide-react"
  
  const Toolbar = () => {
    return (
      <div className="w-full bg-white   ">
        <div className="mx-auto bg-white p-2 border-b border-gray-300">
          <div className="flex justify-between w-full flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => console.log("Toolbar clicked")}
                className="px-0.5 py-1 pr-[15px] text-sm text-gray-700 rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                Tool bar
                <div className="relative flex">
                  <ChevronRight className="w-4 h-4" />
                  <ChevronRight className="absolute w-6 h-4" />
                </div>
              </button>
  
              <div className="h-6 w-[2px] bg-gray-300" />
  
              <button
                onClick={() => console.log("Hide Fields clicked")}
                className="px-3 py-1 text-sm text-gray-700 rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <EyeOff className="w-4 h-4" />
                Hide Fields
              </button>
              <button
                onClick={() => console.log("Sort clicked")}
                className="px-3 py-1 text-sm text-gray-700 rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Sort
              </button>
              <button
                onClick={() => console.log("Filter clicked")}
                className="px-3 py-1 text-sm text-gray-700 rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <Filter className="w-4 h-4" />
                Filter
              </button>
              <button
                onClick={() => console.log("Cell View clicked")}
                className="px-3 py-1 text-sm text-gray-700 rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <Eye className="w-4 h-4" />
                Cell View
              </button>
            </div>
  
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => console.log("Import clicked")}
                className="px-3 py-1 text-black text-sm rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <Import className="w-4 h-4" />
                Import
              </button>
              <button
                onClick={() => console.log("Export clicked")}
                className="px-3 py-1 text-black text-sm rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <Upload className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={() => console.log("Share clicked")}
                className="px-3 py-1 text-black text-sm rounded hover:bg-gray-200 transition flex items-center gap-1"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button
                onClick={() => console.log("New action clicked")}
                className="px-3 py-1 text-white text-sm bg-green-800 rounded hover:bg-green-500 transition flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                New Action
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Toolbar
  