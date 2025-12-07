// src/modules/auth/application/useLogin.ts
"use client";

import { useAuthStore } from "@/store/auth.store";
import { authApi } from "../infrastructure/auth.api";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const loginLocal = useAuthStore((s) => s.loginLocal);
  const router = useRouter();

  return async ({ email, password }: { email: string; password: string }) => {
    // Llama al backend (json-server /auth)
    const { token, user } = await authApi.login(email, password);

    // Guarda en Zustand (persist -> localStorage)
    loginLocal(user, token);

    // Guarda cookie (servidor podrá leerla via proxy)
    // NOTA: en dev esta cookie NO es httpOnly; en prod la backend debe setear httpOnly cookie.
    Cookies.set("token", token, { expires: 1 });

    // Redirige
    router.push("/dashboard");
  };
};
