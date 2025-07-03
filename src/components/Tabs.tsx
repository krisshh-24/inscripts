import { FileText, UserCheck, Flag } from "lucide-react";

const tabSections = [
    {
      name: "Q3 Financial Overview",
      left: 50,   
      width: 600, 
      color: "bg-gray-100 text-gray-700 border-gray-300",
      icon: FileText
    },
    {
      name: "ABC ...",
      left: 850,
      width: 150, 
      color: "bg-green-50 text-green-700 border-green-300",
      icon: UserCheck
    },
    {
      name: "Answer a question ...",
      left: 1000,
      width:221 , 
      color: "bg-purple-50 text-purple-700 border-purple-300",
      icon: Flag
    },
    {
      name: "Extract ...",
      left: 1221,
      width: 120,
      color: "bg-red-50 text-red-700 border-red-300",
      icon: Flag
    },
    {
      name: "+",
      left: 1341,
      width: "calc(100% - 1341px)",
      color: "bg-gray-350 text-gray-700 border-gray-300",
   
    }
  ];
  
  export default function TableTabs() {
    const handleTabClick = (tabName: string) => {
      alert(`Clicked: ${tabName}`);

    };

    return (
      <div className="relative w-full" style={{ height: 40 }}>
        <div
          className="absolute left-0 top-0 bg-white border-b h-full"
          style={{ width: 50, zIndex: 1 }}
        />
        {tabSections.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.name}
              type="button"
              className={`absolute top-0 flex items-center justify-center font-semibold text-sm border-b-4 ${tab.color} hover:bg-opacity-80`}
              style={{
                left: tab.left,
                width: tab.width,
                height: 40,
                zIndex: 2
              }}
              onClick={() => handleTabClick(tab.name)}
            >
              {Icon && <Icon className="w-4 h-4 mr-2" />}
              {tab.name}
            </button>
          );
        })}
      </div>
    );
  }