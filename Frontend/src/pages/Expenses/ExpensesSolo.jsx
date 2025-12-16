import { useState } from "react";
import Barchart from "./Barchart";
import Filter from "./Filter";
import { transactions } from "../../data/data";


export default function ExpensesSolo(){
    const [filter, setFilter] = useState("day");
    const [transactionType, setTransactionType] = useState('expense'); 
    const [amount, setamount] = useState('');
    const [category, setcategory] = useState('');
    const [dates, setdate] = useState('');
    const [notes, setnotes] = useState('');
  
    const today = "2025-11-22";
    const tday = new Date(today);
        const handleAddTransaction = (e) => {
        e.preventDefault();
    if (!amount || !category || !dates) {
            alert("Please fill in Amount, Category, and Date.");
            return;
        }
      //   const newTransaction = {
      //       id: Date.now(), 
      //       type: transactionType,
      //       amount: parseFloat(amount),
      //       category: category,
      //       date: dates,
      //       notes: notes,
      //   };
      }
  
    //   const today = new Date();
    //   const todayStr = today.toISOString().split("T")[0]; 
  
    const filtered = transactions.filter((t) => {
      const date = new Date(t.date);
  
      if (filter === "day") {
        return t.date === today;
      }
  
      if (filter === "week") {
        const diff = (tday - date) / (1000 * 60 * 60 * 24);
        return diff >= 0 && diff <= 7;
      }
  
      if (filter === "month") {
        return (
          date.getMonth() === tday.getMonth() &&
          date.getFullYear() === tday.getFullYear()
        );
      }
  
      return true;
    });
      const chartData = [];
  filtered.forEach((t) => {
    let exists = chartData.find((c) => c.date === t.date);

    if (!exists) {
      chartData.push({
        date: t.date,
        income: t.type === "income" ? t.amount : 0,
        expense: t.type === "expense" ? t.amount : 0,
      });
    } else {
      if (t.type === "income") exists.income += t.amount;
      if (t.type === "expense") exists.expense += t.amount;
    }
  });

    return(
      <div className="p-6 dark:bg-blue-950 min-h-screen">

            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <Filter active={filter} setactive={setFilter} />
                    
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                        <Barchart data={chartData} />
                    </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Solo Expense & Income Tracking</h1>
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg h-fit">
                    <h2 className="text-xl font-semibold mb-5 text-gray-800 dark:text-white">Add New Transaction</h2>
                    
                    <form onSubmit={handleAddTransaction} className="space-y-4">

                        <div className="flex gap-4">
                            <button
                                type="button"
                                onClick={() => setTransactionType('expense')}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition duration-150 ${
                                    transactionType === 'expense' ? 'bg-red-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-red-100 dark:bg-gray-700 dark:text-gray-300'
                                }`}
                            >
                                Add Expense
                            </button>
                            <button
                                type="button"
                                onClick={() => setTransactionType('income')}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition duration-150 ${
                                    transactionType === 'income' ? 'bg-green-500 text-white shadow-md' : 'bg-gray-200 text-gray-700 hover:bg-green-100 dark:bg-gray-700 dark:text-gray-300'
                                }`}
                            >
                                Add Income
                            </button>
                        </div>

                        <div>
                            <label className=" text-sm font-medium text-gray-700 dark:text-gray-300">Amount (Nrs.)</label>
                            <input
                                type="number"
                                // id="amount"
                                value={amount}
                                onChange={(e) => setamount(e.target.value)}
                                placeholder="e.g. 500.00"
                                required
                                className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-gray-50 dark:bg-gray-700 dark:text-white "
                            />
                        </div>

                        <div>
                            <label  className="block text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
                            <input
                                type="text"
                                id="category"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                placeholder="e.g. Food, Salary, Rent"
                                required
                                className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-gray-50 dark:bg-gray-700 dark:text-white "
                            />
                        </div>
                        
                        {/* 4. Date Input */}
                        <div>
                            <label className=" text-sm font-medium text-gray-700 dark:text-gray-300">Date</label>
                            <input
                                type="date"
                                // id="date"
                                value={dates}
                                onChange={(e) => setdate(e.target.value)}
                                required
                                className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-gray-50 dark:bg-gray-700 dark:text-white"
                            />
                        </div>

                        <div>
                            <label  className=" text-sm font-medium text-gray-700 dark:text-gray-300">Notes (Optional)</label>
                            <textarea
                                // id="notes"
                                value={notes}
                                onChange={(e) => setnotes(e.target.value)}
                                placeholder="Brief description of the transaction..."
                                className="mt-1 w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 bg-gray-50 dark:bg-gray-700 dark:text-white "
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4  rounded-lg text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150 focus:outline-none  focus:ring-blue-500"
                        >
                            Add Transaction
                        </button>
                    </form>
                </div>

</div>

            </div>
        </div>
    );
}