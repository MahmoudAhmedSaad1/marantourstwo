export const baseUrl = "https://api.dubaidaytrips.com/v1/";
export async function getData(url) {
  const res = await fetch(`${baseUrl}${url}`, {cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}