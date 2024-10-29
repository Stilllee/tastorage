"use client";

import { useEffect, useState } from "react";

import Cookies from "js-cookie";

export const useAdminState = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get("adminToken");
    if (token) setIsAdmin(true);
  }, []);

  const login = (token: string) => {
    Cookies.set("adminToken", token);
    setIsAdmin(true);
  };

  const logout = () => {
    Cookies.remove("adminToken");
    setIsAdmin(false);
  };

  return { isAdmin, login, logout };
};
