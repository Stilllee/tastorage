"use client";

import { ReactNode, createContext, useContext } from "react";

import { AdminContextType } from "@/types";
import { useAdminState } from "@/hook/useAdminState";

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: ReactNode }) {
  const adminState = useAdminState();

  return (
    <AdminContext.Provider value={adminState}>{children}</AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error("useAdmin은 AdminProvider 내에서 사용해야 합니다.");
  }
  return context;
}
