import React from "react";
import { useState } from "react";
import { Eye, CheckCircle, XCircle, Check } from "lucide-react";
import { Modal } from "../Expenses/ExpensesGroup";
import { data } from "./Approval";

export default function Table({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleApprove = (request) => {
  console.log("Approved:", request);
  setIsModalOpen(null);
};

const handleReject = (request) => {
  console.log("Rejected:", request);
  setIsModalOpen(null);
};




  const statusClasses = {
    Paid: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200",
    Approved: "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200",
    Pending:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200",
    Rejected: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200",
    Reimbursement: "bg-purple-100 text-purple-700  dark:text-purple-200",
  };
  return (
    <div className="overflow-x-auto text-black dark:text-white">
      <table className="w-full border-collapse ">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600 dark:bg-gray-900 dark:text-gray-300">
            <th className="p-3">Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Details</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              <td className="p-3 font-medium">{item.name}</td>
              <td className="p-3">{item.type}</td>
              <td className="p-3">Nrs.{item.amount}</td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${
                    statusClasses[item.status] ||
                    "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="p-3">
                <button
                  onClick={() => setIsModalOpen(item)}
                  className="flex items-center gap-1 px-4 py-3 text-xs font-semibold rounded bg-blue-600 text-white dark:text-blue-400 hover:underline"
                >
                  <Eye size={16} /> View
                </button>
              </td>

              <td className="p-3 flex gap-2">
                <div className="  flex  flex-row gap-2">
                  <button className="  flex  gap-1 items-center font-semibold px-3 py-3 text-xs rounded bg-green-600 dark:bg-green-800 text-white dark:text-green-200 hover:opacity-80">
                    <CheckCircle size={14} /> Approve
                  </button>
                  <button className=" flex items-center font-semibold gap-1 px-4 py-3 text-xs rounded bg-red-600 text-white dark:bg-red-800 dark:text-red-200 hover:opacity-80">
                    <XCircle size={14} /> Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(null)}>
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg w-[22rem]">
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Request Details
            </h2>

            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span className="font-medium">Name</span>
                <span className="font-semibold">{isModalOpen.name}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Type</span>
                <span className="font-semibold">{isModalOpen.type}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Amount</span>
                <span className="font-semibold">Nrs. {isModalOpen.amount}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Status</span>
                <span className="font-semibold">{isModalOpen.status}</span>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(null)}
                className="px-4 py-2 text-sm font-medium rounded
                     bg-gray-200 text-gray-800 hover:bg-gray-300
                     dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              >
                Close
              </button>

              <button
                onClick={() => handleApprove(isModalOpen)}
                className="px-4 py-2 text-sm font-medium rounded flex items-center gap-1
                     bg-green-600 text-white hover:bg-green-700 transition"
              >
                <Check size={16} />
                Approve
              </button>

              <button
                onClick={() => handleReject(isModalOpen)}
                className="px-4 py-2 text-sm font-medium rounded flex items-center gap-1
                     bg-red-600 text-white hover:bg-red-700 transition"
              >
                <XCircle size={16} />
                Reject
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
