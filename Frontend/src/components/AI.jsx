import { X } from "lucide-react";

export default function AI({ open, onclose }) {
  if (!open) return null;

  return (
    <div className="fixed bottom-6 right-6 w-80 bg-white dark:bg-gray-900 shadow-2xl rounded-xl p-4 z-50 ">
      
    
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg text-black dark:text-white">AI Assistant</h2>
        <button onClick={onclose}>
          <X size={20} className="dark:text-white" />
        </button>
      </div>

      {/* Chat body */}
      <div className="h-60 overflow-y-auto text-sm p-2 border rounded-lg dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-300">Hi! How can I help you?</p>
      </div>

      <div className="mt-3 flex gap-2">
        <input
          type="text"
          placeholder="Ask something..."
          className="w-full border dark:border-gray-700 rounded-lg px-3 py-2 text-sm dark:bg-gray-800 dark:text-white"
        />
        <button className="bg-purple-600 text-white px-3 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}
