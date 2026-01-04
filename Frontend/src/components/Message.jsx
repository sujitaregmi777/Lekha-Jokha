import React from "react";
import { X } from "lucide-react";

export default function Message({ open, onclose }) {
  if (!open) return null;
  return (
    <>
    <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onclose}
      />
    <div
      className={`fixed top-0 right-0  w-64 h-screen z-50  bg-white dark:bg-blue-950  shadow-xl transition-transform duration-300 ${
        open ? "translate-x-0 " : "translate-x-full"
      }`}
    >
      <button onClick={onclose} className="p-2 dark:text-white">
        <X size={20} />
      </button>
      <h1 className="text-xl font-bold text-black dark:text-white ">Message</h1>
    </div>
    </>
  );
}
