"use client";

import { useEffect, useState } from "react";

export const useAdminState = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) setIsAdmin(true);
  }, []);

  const login = (token: string) => {
    localStorage.setItem("adminToken", token);
    setIsAdmin(true);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsAdmin(false);
  };

  return { isAdmin, login, logout };
};
