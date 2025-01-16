export async function fetchAllBrands() {
  const url = `${import.meta.env.VITE_SERVER_API_URL}/brands`;
  const res = await fetch(url);
  const json = await res.json();
  return json.brands;
}
