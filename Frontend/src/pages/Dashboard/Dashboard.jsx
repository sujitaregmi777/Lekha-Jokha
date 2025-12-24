import { useState } from "react";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import Card from "./Card";
import Filter from "./Filter";
import PiechartIncome from "./PiechartIncome";
import PiechartExpense from "./PiechartExpense";
import Linechart from "./Linechart";
import Table from "./Table";
import { transactions } from "../../data/data";

export default function Dashboard() {
  const [filter, setFilter] = useState("day");

  const today = "2025-11-21";
  const tday = new Date(today);

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

  const pieDataIncome = [];
  filtered.forEach((t) => {
    if (t.type === "income") {
      let exists = pieDataIncome.find((p) => p.category === t.category);
      if (!exists) {
        pieDataIncome.push({
          category: t.category,
          amount: t.amount,
        });
      } else {
        exists.amount += t.amount;
      }
    }
  });

  const pieDataExpense = [];
  filtered.forEach((t) => {
    if (t.type === "expense") {
      let exists = pieDataExpense.find((p) => p.category === t.category);
      if (!exists) {
        pieDataExpense.push({
          category: t.category,
          amount: t.amount,
        });
      } else {
        exists.amount += t.amount;
      }
    }
  });

  const totalIncome = filtered
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = filtered
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const todayTotal = filtered
    .filter((t) => t.date === today)
    .reduce((sum, t) => sum + t.amount, 0);

  let prevIncome = 0;
  let prevExpense = 0;

  transactions.forEach((t) => {
    const d = new Date(t.date);

    if (filter === "day") {
      const y = new Date(tday);
      y.setDate(tday.getDate() - 1);
      const ystr = y.toISOString().split("T")[0];

      if (t.date === ystr) {
        if (t.type === "income") prevIncome += t.amount;
        if (t.type === "expense") prevExpense += t.amount;
      }
    }

    if (filter === "week") {
      const diff = (tday - d) / (1000 * 60 * 60 * 24);
      const prevDiff = diff - 7;
      if (prevDiff >= 0 && prevDiff <= 7) {
        if (t.type === "income") prevIncome += t.amount;
        if (t.type === "expense") prevExpense += t.amount;
      }
    }

    if (filter === "month") {
      const prevMonth = new Date(tday);
      prevMonth.setMonth(tday.getMonth() - 1);

      if (
        d.getMonth() === prevMonth.getMonth() &&
        d.getFullYear() === prevMonth.getFullYear()
      ) {
        if (t.type === "income") prevIncome += t.amount;
        if (t.type === "expense") prevExpense += t.amount;
      }
    }
  });

  const incomePercentage =
    prevIncome === 0 ? 100 : ((totalIncome - prevIncome) / prevIncome) * 100;

  const expensePercentage =
    prevExpense === 0 ? 100 : ((totalExpense - prevExpense) / prevExpense) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-4 sm:p-6 lg:p-8 mt-10">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Track your financial overview
            </p>
          </div>
          <Filter active={filter} setactive={setFilter} />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <DollarSign size={24} className="text-white" />
              </div>
            </div>
            <Card title="Total Balance" amount={todayTotal} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <TrendingUp size={24} className="text-white" />
              </div>
            </div>
            <Card
              title="Total Income"
              amount={totalIncome}
              percentage={incomePercentage}
              icon={TrendingUp}
            />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                <TrendingDown size={24} className="text-white" />
              </div>
            </div>
            <Card
              title="Total Expense"
              amount={totalExpense}
              percentage={expensePercentage}
              icon={TrendingDown}
            />
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Income vs Expense Trend
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Track your financial flow over time
            </p>
          </div>
          <Linechart data={chartData} />
        </div>

        {/* Pie Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                Income Distribution
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Breakdown by category
              </p>
            </div>
            <PiechartIncome data={pieDataIncome} />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                Expense Distribution
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Breakdown by category
              </p>
            </div>
            <PiechartExpense data={pieDataExpense} />
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Transactions
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Your latest financial activities
            </p>
          </div>
          <Table data={filtered} />
        </div>
      </div>
    </div>
  );
}