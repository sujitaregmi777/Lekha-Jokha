//each filter need its own state 
export default function Filter({
  activeDay,
  setActiveDay,
  activeType,
  setActiveType,
  activeRequest,
  setActiveRequest,
}) {
  const tabs = ["Day", "Week", "Month", "All"];
  const type = ["Income", "Expense", "All"];
  const statuses = [
    "Pending",
    "Approved",
    "Paid",
    "Rejected",
    "Reimbursement",
    "All",
  ];

  return (
    <div className="flex gap-4 mb-6">

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Time</label>
        <select
          value={activeDay}
          onChange={(e) => setActiveDay(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300"
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Type</label>
        <select
          value={activeType}
          onChange={(e) => setActiveType(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300"
        >
          {type.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label className="text-sm text-gray-600 mb-1">Status</label>
        <select
          value={activeRequest}
          onChange={(e) => setActiveRequest(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300"
        >
          {statuses.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

    </div>
  );
}
