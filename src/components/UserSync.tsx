"use client";

import { syncUser } from "@/lib/actions/users";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function UserSync() {
  const { user } = useUser();

  useEffect(() => {
    if (user?.id) {
      syncUser().catch(console.error);
    }
  }, [user?.id]);

  return null;
}