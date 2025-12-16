import { useState } from "react";
import { ChartColumnIncreasingIcon, ChartColumnDecreasingIcon } from "lucide-react";
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
      const prevDiff = diff - 7; // 7–14 days ago
      if (prevDiff >= 0 && prevDiff <= 7) {
        if (t.type === "income") prevIncome += t.amount;
        if (t.type === "expense") prevExpense += t.amount;
      }
    }

    // Previous Month
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



  // const chartData2 = [
  //   {
  //     date: '2025-11-22',
  //     income: 100,
  //     expense:200
  //   },
  //   {
  //     date: '2025-11-23',
  //     income: 50,
  //     expense:200
  //   },
  // ]
  //   const piedata2 = [
  //     {
  //   date: '2023-11-22',
  //   amount :100,
  //   category : 300
  //   },
  //     {
  //   date: '2023-11-23',
  //   amount :100,
  //   category : 3000
  //   }
  // ]

  return (
    <div className="p-6 space-y-6 z-10 dark:bg-blue-950 dark:text-white">

      <Filter active={filter} setactive={setFilter} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 dark:text-white">
        <Card title="Total" amount={todayTotal} />
        <Card
          title="Total Income"
          amount={totalIncome}
          percentage={incomePercentage}
          icon={ChartColumnIncreasingIcon} />
        <Card
          title="Total Expense"
          amount={totalExpense}
          percentage={expensePercentage}
          icon={ChartColumnDecreasingIcon}
        />
      </div>
 <div className="grid gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
        <Linechart data={chartData} />
        </div>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <PiechartIncome data={pieDataIncome} />
        </div>
        <div className="bg-white p-4 rounded-xl shadow">
        <PiechartExpense data={pieDataExpense} />
        </div>
        </div>


      <Table data={filtered} />
    </div>
  );
}
