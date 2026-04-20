import { fetchJson } from "./fetchImage";

export async function fetchImage<T>(
  url: string,
  picker: (data: T) => string
): Promise<string> {
  const data = await fetchJson<T>(url);
  return picker(data);
}