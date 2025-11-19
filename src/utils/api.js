export const getBackendUrl = () => {
  const env = import.meta.env.VITE_BACKEND_URL;
  if (env) return env.replace(/\/$/, '');
  try {
    const url = new URL(window.location.href);
    if (url.port === '3000') {
      url.port = '8000';
    }
    return url.origin;
  } catch {
    return '';
  }
};

export const api = async (path, options = {}) => {
  const base = getBackendUrl();
  const res = await fetch(`${base}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Request failed: ${res.status}`);
  }
  const contentType = res.headers.get('content-type') || '';
  if (contentType.includes('application/json')) return res.json();
  return res.text();
};
