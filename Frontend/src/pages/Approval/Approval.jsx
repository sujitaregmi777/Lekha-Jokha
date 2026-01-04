import React, { useState } from "react";
import Filter from "./Filter";
import Table from "./Table";



 export const data = [
  { id: 1, name: "John Doe", type: "Expense", amount: 1200, status: "Pending" },
  { id: 2, name: "Sarah Smith", type: "Income", amount: 5000, status: "Approved" },
  { id: 3, name: "Mike Ross", type: "Expense", amount: 450, status: "Rejected" },
  { id: 4, name: "Josheph Rose", type: "Income", amount: 4500, status: "Reimbursement" },
  { id: 5, name: "Lisa ", type: "Expense", amount: 500, status: "Paid" },
];

export default function Approval() {
  const [activeDay, setActiveDay] = useState("All");
  const [activeType, setActiveType] = useState("All");
  const [activeRequest, setActiveRequest] = useState("All");

  

  const filteredData = data.filter((item) => {
    const matchesType = activeType === "All" || item.type === activeType;
    const matchesStatus = activeRequest === "All" || item.status === activeRequest;
    return matchesType && matchesStatus;
  });

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-6">Request Approvals</h1>
      <Filter 
        activeDay={activeDay} setActiveDay={setActiveDay}
        activeType={activeType} setActiveType={setActiveType}
        activeRequest={activeRequest} setActiveRequest={setActiveRequest}
      />
      <Table data={filteredData} />
    </div>
  );
}