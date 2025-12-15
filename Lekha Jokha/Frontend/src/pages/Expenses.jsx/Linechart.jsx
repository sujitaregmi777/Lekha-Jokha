import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Linechart({ data }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Income vs Expense Trend</h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="income" stroke="#4ade80" strokeWidth={3} />
          <Line type="monotone" dataKey="expense" stroke="#f87171" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
