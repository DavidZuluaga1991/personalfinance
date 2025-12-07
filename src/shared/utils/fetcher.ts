export async function fetcher(url: string, opts: RequestInit = {}) {
  const res = await fetch(url, opts);
  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: 'Network error' }));
    const msg = body?.error || res.statusText || 'Network error';
    throw new Error(msg);
  }
  return res.json();
}
