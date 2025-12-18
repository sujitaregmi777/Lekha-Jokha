import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function User({ open, onclose }) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  if (!open) return null;

  const handleLogout = () => {
    setModal(false);
    onclose();
    navigate("/login");
  };

  return (
    <>
      <div className="fixed right-0 top-14 w-48 bg-white dark:bg-blue-950 shadow-xl z-40 rounded-md">
        <Link
          to="/usersetting"
          className=" px-4 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-blue-900 border-2 border-b flex"
        >
          User Setting
        </Link>

        <button
          onClick={() => setModal(true)}
          className=" flex border-2 border-b w-full text-left px-4 py-2 font-semibold text-red-600 hover:bg-gray-100 dark:hover:bg-blue-900"
        >
          Logout
        </button>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-80">
            <h2 className="text-lg font-semibold text-center mb-4">
              Are you sure you want to logout?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Yes, Logout
              </button>

              <button
                onClick={() => setModal(false)}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
