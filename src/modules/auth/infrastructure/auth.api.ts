import { API_BASE } from "@/shared/utils/api";

export const authApi = {
  login: async (email: string, password: string) => {
    const res = await fetch(`${API_BASE}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //credentials: "include", // opcional: para enviar cookies automáticamente
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body.error || "Login failed");
    }
    return res.json(); // { token, user }
  },
};

// export const authApi = {
//   login: async (email: string, password: string) => {
//     // json-server: GET /users?email=...&password=...
//     const res = await fetch(`${API_BASE}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
//     const users = await res.json();
//     if (!users || users.length === 0) {
//       const err: any = new Error("Invalid credentials");
//       err.status = 401;
//       throw err;
//     }
//     const user = users[0];
//     // simulamos token (en producción, el backend debería devolver JWT)
//     const token = btoa(`${user.id}:${user.email}`);
//     return { user: { id: user.id, email: user.email, name: user.name }, token };
//   }
// };
