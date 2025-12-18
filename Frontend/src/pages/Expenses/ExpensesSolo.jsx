import { useState } from "react";
import Barchart from "./Barchart";
import Filter from "./Filter";
import { transactions } from "../../data/data";

export default function ExpensesSolo() {
  const [filter, setFilter] = useState("day");
  const [transactionType, setTransactionType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const today = "2025-11-22";
  const tday = new Date(today);

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) {
      alert("Please fill in Amount, Category, and Date.");
      return;
    }
  };

  const filtered = transactions.filter((t) => {
    const d = new Date(t.date);
    if (filter === "day") return t.date === today;
    if (filter === "week") {
      const diff = (tday - d) / (1000 * 60 * 60 * 24);
      return diff >= 0 && diff <= 7;
    }
    if (filter === "month") {
      return d.getMonth() === tday.getMonth() && d.getFullYear() === tday.getFullYear();
    }
    return true;
  });

  const chartData = [];
  filtered.forEach((t) => {
    const found = chartData.find((c) => c.date === t.date);
    if (!found) {
      chartData.push({
        date: t.date,
        income: t.type === "income" ? t.amount : 0,
        expense: t.type === "expense" ? t.amount : 0,
      });
    } else {
      if (t.type === "income") found.income += t.amount;
      if (t.type === "expense") found.expense += t.amount;
    }
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-950 p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Expense & Income Tracker
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Chart Section */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-4">
            <Filter active={filter} setactive={setFilter} />
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-4">
            <Barchart data={chartData} />
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5 sm:p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Add Transaction
          </h2>

          {/* Type Toggle */}
          <div className="flex mb-4 rounded-xl overflow-hidden border dark:border-gray-700">
            <button
              type="button"
              onClick={() => setTransactionType("expense")}
              className={`flex-1 py-2 text-sm font-semibold transition ${
                transactionType === "expense"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setTransactionType("income")}
              className={`flex-1 py-2 text-sm font-semibold transition ${
                transactionType === "income"
                  ? "bg-green-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              Income
            </button>
          </div>

          <form onSubmit={handleAddTransaction} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="500"
                className="mt-1 w-full rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-2.5 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Category</label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Food, Salary"
                className="mt-1 w-full rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-2.5 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1 w-full rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-2.5 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 dark:text-gray-300">Notes</label>
              <textarea
                rows="3"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Optional notes"
                className="mt-1 w-full rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-2.5 text-gray-900 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Add Transaction
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
