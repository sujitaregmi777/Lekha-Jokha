import React from "react";
import { createContext, useState } from "react";

export const ProfileContext = createContext();

export default function ProfileProvider({ children }) {
  const defaultProfile = {
    firstName: "Ava",
    lastName: "Wales",
    email: "avawales@gmail.com",
    avatar: "",
  };
  const [profile, setProfile] = useState(defaultProfile);
  localStorage.setItem("userProfile", defaultProfile);

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <div>{children}</div>
    </ProfileContext.Provider>
  );
}
