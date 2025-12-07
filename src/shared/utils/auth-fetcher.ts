import { API_BASE } from './api';

export async function authFetch(path: string, opts: RequestInit = {}) {
  const token = typeof window !== "undefined" ? localStorage.getItem("zustand:auth-storage") : null;

  // Si usas persist con key "auth-storage", dentro está token; pero es más simple leer useAuthStore.getState().token en componentes.
  // Aquí haremos lectura directa de localStorage si existe
  let parsedToken: string | null = null;
  try {
    if (token) {
      const state = JSON.parse(token);
      parsedToken = state?.state?.token ?? null;
    }
  } catch {
    parsedToken = null;
  }

  const headers = {
    "Content-Type": "application/json",
    ...(opts.headers || {}),
    ...(parsedToken ? { Authorization: `Bearer ${parsedToken}` } : {}),
  };

  const res = await fetch(`${API_BASE}${path}`, { ...opts, headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(body || res.statusText);
  }
  return res.json();
}