import React from "react";


export default function Table({ data }) {
  return (
    <div className="overflow-x-auto text-black dark:text-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="p-3">Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-50 dark:hover:text-black transition"
            >
              <td className="p-3 font-medium">{item.name}</td>
              <td className="p-3">{item.type}</td>
              <td className="p-3">Nrs.{item.amount}</td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      item.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
