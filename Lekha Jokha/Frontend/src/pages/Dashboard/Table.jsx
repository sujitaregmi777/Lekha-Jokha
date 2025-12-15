export default function Table({ data }) {
  return (
    <div className=" p-5 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">Transaction Statement</h2>

      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="p-2">Date</th>
            <th className="p-2">Category</th>
            <th className="p-2">Type</th>
            <th className="p-2">Amount</th>
          </tr>
        </thead>

        <tbody>
          {data.map((t) => (
            <tr key={t.id} className="border-b">
              <td className="p-2">{t.date}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2 capitalize text-blue-600">{t.type}</td>
              <td className="p-2">NPR {t.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
