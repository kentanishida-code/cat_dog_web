"use server";

export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("API取得に失敗しました");
  }

  return res.json();
}