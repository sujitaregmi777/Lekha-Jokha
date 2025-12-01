export default function Filter({active, setactive}){
    const tabs= ["day" , "week" , "month" , "all"];
    return(
        <div className="flex gap-3 mb-6">
            {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setactive(tab)}
          className={`px-4 py-2 rounded-lg capitalize 
            ${
              active === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
        >
          {tab}
        </button>
      ))}

        </div>
    );

}