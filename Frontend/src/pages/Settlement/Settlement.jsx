// import { data } from "react-router";
import Table from "./Table";
import React from 'react'

export default function Settlement() {
 const data = [
    { id: 1 , name : "Frek", category: "Salary",  amount: 50000, status: "Paid" },
    { id: 2,   name : "Alan",category: "Rent",  amount: 15000, status: "Paid" },
    { id: 3,   name : "Derek",category: "Electricity Bill",  amount: 3000, status: "Unpaid" },
    { id: 4,   name : "Fiona",category: "Freelance Project",  amount: 20000, status: "Paid" },
  ];

  return (

        <div className="bg-white dark:bg-gray-800   border  border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Recent Transactions
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Your latest financial activities
            </p>
          </div>
          <Table data ={data} />
        </div>
  )
}
