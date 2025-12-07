import { API_BASE, authHeaders } from "@/shared/utils/api";
// src/modules/transactions/infrastructure/transaction.api.ts
import { authFetch } from "@/shared/utils/auth-fetcher";

export const transactionApi = {
  list: async () => authFetch("/transactions"),
  get: async (id: string) => authFetch(`/transactions/${id}`),
  create: async (payload: any) => authFetch("/transactions", { method: "POST", body: JSON.stringify(payload) }),
  update: async (id: string, payload: any) => authFetch(`/transactions/${id}`, { method: "PUT", body: JSON.stringify(payload) }),
  delete: async (id: string) => authFetch(`/transactions/${id}`, { method: "DELETE" }),
};

// import { Transaction } from "../domain/transaction.model";
// async function authFetch(url: string, opts: RequestInit = {}) {
//   const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
//   const headers = {
//     'Content-Type': 'application/json',
//     ...(opts.headers || {}),
//     ...(token ? { Authorization: `Bearer ${token}` } : {}),
//   };
//   const res = await fetch(`${API_BASE}${url}`, { ...opts, headers });
//   if (!res.ok) {
//     throw new Error(await res.text());
//   }
//   return res.json();
// }

// export const transactionApi = {
//   list: async () => authFetch('/transactions'),
//   create: async (payload: any) => authFetch('/transactions', { method: 'POST', body: JSON.stringify(payload) }),
//   get: async (id: string) => authFetch(`/transactions/${id}`),
//   update: async (id: string, payload: any) => authFetch(`/transactions/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
//   delete: async (id: string) => authFetch(`/transactions/${id}`, { method: 'DELETE' }),
// };