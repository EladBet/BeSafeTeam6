import type Brand from '../../../shared/brand.type';

export async function fetchAllBrands(): Promise<Brand[]> {
  const res = await fetch('http://localhost:4567/brands');
  return await res.json();
}
