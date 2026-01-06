import { useState, useEffect } from "react";

export default function UserSettings() {
  const [profile, setProfile] = useState({
    firstName: "Bryan",
    lastName: "Cranston",
    email: "bryan.cranston@mail.com",
    avatar: "",
    currentPassword: "",
    newPassword: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("userProfile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
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

      {/* Profile Picture */}
      <div className="flex items-center gap-6 mb-8">
        <img
          src={profile.avatar || "https://ui-avatars.com/api/?name=User"}
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-gray-800 dark:text-white">
            Profile picture
          </p>
          <p className="text-sm text-gray-500 mb-2">
            PNG, JPEG under 15MB
          </p>

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
              onClick={() =>
                setProfile((prev) => ({ ...prev, avatar: "" }))
              }
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
            value={profile.firstName}
            onChange={handleChange}
            placeholder="First name"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            name="lastName"
            value={profile.lastName}
            onChange={handleChange}
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
          Modify your current password (UI only).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="password"
            name="currentPassword"
            value={profile.currentPassword}
            onChange={handleChange}
            placeholder="Current password"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            type="password"
            name="newPassword"
            value={profile.newPassword}
            onChange={handleChange}
            placeholder="New password"
            className="w-full px-4 py-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>
      </div>
    </div>
  );
}
