"use client";

import AddRecipeButton from "./AddRecipeButton";
import { useAdmin } from "@/contexts/AdminContext";

export default function AdminActions() {
  const { isAdmin } = useAdmin();
  return isAdmin ? <AddRecipeButton /> : null;
}
