import { X } from "lucide-react";
import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function Notification({ open, onclose }) {
  const { notifications } = useContext(NotificationContext);

  if (!open) return null;

  return (
        <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onclose}
      >
    <div
      className={`fixed top-0 right-0 w-80 h-screen z-50 
      bg-white dark:bg-blue-950 shadow-xl 
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b dark:border-blue-800">
        <h1 className="text-lg font-bold text-black dark:text-white">
          Notifications
        </h1>
        <button
          onClick={onclose}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-blue-900"
        >
          <X size={20} />
        </button>
      </div>

      {/* Body */}
      <div className="p-4 space-y-3 overflow-y-auto h-full">
        {notifications.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No notifications yet
          </p>
        ) : (
          notifications.map((n, index) => (
            <div
              key={index}
              className="p-3 rounded-lg border 
              bg-gray-50 dark:bg-blue-900 
              dark:border-blue-800"
            >
              <p className="text-sm font-semibold text-black dark:text-white">
                {n.name}
              </p>

              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                {n.message || "No additional message"}
              </p>

              <span className="inline-block mt-2 text-xs font-medium text-red-600">
                {n.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
