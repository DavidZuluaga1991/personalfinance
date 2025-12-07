export function parseJwt(token: string | null) {
  if (!token) return null;
  try {
    const [, payload] = token.split('.');
    const json = atob(payload);
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function isExpired(token: string | null) {
  const p = parseJwt(token);
  if (!p) return true;
  const now = Math.floor(Date.now() / 1000);
  return p.exp && p.exp < now;
}
