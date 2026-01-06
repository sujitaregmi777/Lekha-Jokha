import React from 'react'
import { createContext, useState } from "react";

export const NotificationContext = createContext();

export default function NotificationProvider({children}) {
    const [notifications, setNotifications] = useState([]);
      const addNotification = (notification) => {
    setNotifications((prev) => [notification, ...prev]); //...prev is used to show previous state 
  };
    
  return (
   <NotificationContext.Provider
      value={{ notifications, addNotification }}
    >
      <div>{children}</div>
    </NotificationContext.Provider>
  );
}
