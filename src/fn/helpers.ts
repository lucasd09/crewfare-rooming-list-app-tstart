export async function post<T>(url: string, body: any): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`Request error on ${url}: ${res.status}`);
  }

  const data: T = await res.json();

  return data;
}

export async function get<T>(url: string): Promise<T> {
  const res = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Request error on ${url}: ${res.status}`);
  }

  const data: T = await res.json();

  return data;
}
