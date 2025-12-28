import React, { useState } from "react";
import Filter from "./Filter";
import Table from "./Table";

export default function Approval() {
  const [activeDay, setActiveDay] = useState("all");
  const [activeType, setActiveType] = useState("all");
  const [activeRequest, setActiveRequest] = useState("all");

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Approvals</h2>

      <Filter
        activeDay={activeDay}
        setActiveDay={setActiveDay}
        activeType={activeType}
        setActiveType={setActiveType}
        activeRequest={activeRequest}
        setActiveRequest={setActiveRequest}
      />

      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
        <p>Time: <b>{activeDay}</b></p>
        <p>Type: <b>{activeType}</b></p>
        <p>Request: <b>{activeRequest}</b></p>
      </div>
      <Table data ={data} />
        
      </div>
  );
}
