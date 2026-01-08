import { useState, useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";

export default function UserSettings() {
  const { profile, setProfile } = useContext(ProfileContext);
  const [other, setothers] = useState({
    currentPassword: "",
    newPassword: "",
    monthlyBudget: 50000,
    selectedCategory: "food",
    categoryLimits: {
      rent: 20000,
      food: 10000,
      transport: 5000,
      utilities: 5000,
      others: 5000,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target; //e.target.value;  is string and e.target is object
    setothers((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, avatar: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        User Settings
      </h1>

      <div className="flex items-center gap-6 mb-8">
        <img
          src={
            profile.avatar ||
            "https://static.vecteezy.com/system/resources/previews/040/089/058/large_2x/male-profile-icon-vector.jpg"
          }
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-gray-800 dark:text-white">
            Profile picture
          </p>
          <p className="text-sm text-gray-500 mb-2">PNG, JPEG ..</p>

          <div className="flex gap-3">
            <label className="px-4 py-2 text-sm rounded-lg bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700">
              Upload new picture
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarUpload}
              />
            </label>

            <button
              onClick={() => setProfile((prev) => ({ ...prev, avatar: "" }))}
              className="px-4 py-2 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {/* Full Name */}
      <div className="mb-8">
        <h2 className="font-semibold text-gray-800 dark:text-white mb-3">
          Full name
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="firstName"
            value={profile.firstName }
            onChange={(e) =>
              setProfile((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            placeholder="First name"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            name="lastName"
            value={profile.lastName}
            onChange={(e) =>
              setProfile((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            placeholder="Last name"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>

      {/* Contact Email */}
      <div className="mb-8">
        <h2 className="font-semibold text-gray-800 dark:text-white mb-1">
          Contact email
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Manage your account’s email address.
        </p>

        <input
          value={profile.email}
          readOnly
          className="w-full px-4 py-3 rounded-lg border bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
        />
      </div>

      {/* Password */}
      <div>
        <h2 className="font-semibold text-gray-800 dark:text-white mb-1">
          Password
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Modify your current password .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            name="currentPassword"
            value={other.currentPassword}
            onChange={handleChange}
            placeholder="Current password"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            type="password"
            name="newPassword"
            value={other.newPassword}
            onChange={handleChange}
            placeholder="New password"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>
        {/* Budget Slider */}
        <div className="mb-10 mt-8">
          <h2 className="font-semibold text-gray-800 dark:text-white mb-2">
            Monthly Budget Control
          </h2>

          {/* Category Selector */}
          <select
            value={other.selectedCategory}
            onChange={(e) =>
              setothers((prev) => ({
                ...prev,
                selectedCategory: e.target.value,
              }))
            }
            className="mb-4 px-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value="rent">Rent</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="others">Others</option>
          </select>

          {/* Slider */}
          <div className="relative">
            <input
              type="range"
              min="0"
              max={other.monthlyBudget}
              step="500"
              value={other.categoryLimits[other.selectedCategory]}
              onChange={(e) =>
                setothers((prev) => ({
                  ...prev,
                  categoryLimits: {
                    ...prev.categoryLimits,
                    [prev.selectedCategory]: Number(e.target.value),
                  },
                }))
              }
              className="w-full accent-indigo-600"
            />

            {/* Center Amount */}
            <div className="absolute justify-center -top-8 text-sm font-semibold text-indigo-600">
              Rs. {other.categoryLimits[other.selectedCategory]}
            </div>
          </div>

          {/* Min / Max */}
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Rs. 0</span>
            <span>Set up to this amount</span>
            <span>Rs. {other.monthlyBudget}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
