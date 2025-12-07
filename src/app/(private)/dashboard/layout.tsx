"use client";
import { useEffect } from "react";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);
  const router = useRouter();

  useEffect(()=> {
    if (!token) router.push('/login');
  }, [token, router]);

  if (!token) return <div>Checking session...</div>;
  return <>{children}</>;
}
