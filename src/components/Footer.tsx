const tabSections = [
    {
      name: "All Orders",
      left: 50,   
      width: 100, 
      color: "bg-green-100 text-green-900 border-green-300 border-t-4",
      
    },
    {
      name: "Odered",
      left: 150,
      width: 100, 
      color: "bg-gray-50 text-gray-700 border-gray-300",

    },
    {
      name: "Reviewed",
      left: 250,
      width:100 , 
      color: "bg-gray-50 text-gray-700 border-gray-300",

    },
    {
      name: "Pending",
      left: 350,
      width: 100,
      color: "bg-gray-50 text-gray-700 border-gray-300",

    }
  ];
  
  export default function TableTabs() {
    const handleTabClick = (tabName: string) => {
      alert(`Clicked: ${tabName}`);

    };

    return (
      <div className="relative w-full" style={{ height: 40 }}>
        <div
          className="absolute left-0 top-0 bg-white h-full"
          style={{ width: 50, zIndex: 1 }}
        />
        {tabSections.map((tab) => {
          return (
            <button
              key={tab.name}
              type="button"
              className={`absolute top-0 flex items-center justify-center font-semibold text-sm  ${tab.color} hover:bg-opacity-80`}
              style={{
                left: tab.left,
                width: tab.width,
                height: 40,
                zIndex: 2
              }}
              onClick={() => handleTabClick(tab.name)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    );
  }