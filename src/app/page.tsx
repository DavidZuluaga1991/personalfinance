// src/app/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value ?? null;

  if (token) return redirect("/dashboard");
  return redirect("/login");
}
