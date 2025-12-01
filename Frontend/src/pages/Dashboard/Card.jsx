export default function Card({title, amount , percentage ,icon:Icon}){
    return(
      
    <div className="bg-white dark:bg-gray-700 p-5 rounded-xl shadow-md text-center">
      <div className="flex items-center justify-between">
      <h2 className="text-lg font-semibold">{title}</h2>
              {Icon && <Icon className="text-gray-700" size={24} />}
      </div>

      <p className="text-3xl font-bold mt-2">{amount} NPR</p>
            {percentage !== undefined && (
        <p className={`${percentage >= 0 ? "text-green-600" : "text-red-600"}`}>
          {percentage.toFixed(1)}%
        </p>
            )}
    </div>
  );
}
