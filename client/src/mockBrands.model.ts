export type brand = {
  id: string;
  name: string;
  ratingOverall: number;
  ratingByCategory: Array<{
    category: string;
    details: string;
    rating: number;
  }>;
};

const Brands: brand[] = [
  {
    id: '1',
    name: 'The Good Clothes brand',
    ratingOverall: 5,
    ratingByCategory: [
      {
        category: 'Sizing Variety',
        details: 'Has many sizes',
        rating: 5,
      },
      {
        category: 'Race Inclusivity',
        details: 'Showing different people',
        rating: 4,
      },
      {
        category: 'Body-Positive Models',
        details: 'Features diverse body types in ads',
        rating: 5,
      },
    ],
  },
  {
    id: '2',
    name: 'EcoFashion Hub',
    ratingOverall: 4,
    ratingByCategory: [
      {
        category: 'Sizing Variety',
        details: 'Limited options for plus sizes',
        rating: 3,
      },
      {
        category: 'Race Inclusivity',
        details: 'Highlights a diverse range of models',
        rating: 5,
      },
      {
        category: 'Body-Positive Models',
        details: 'Uses realistic and unedited images',
        rating: 4,
      },
    ],
  },
  {
    id: '3',
    name: 'Inclusive Wear Co.',
    ratingOverall: 4.5,
    ratingByCategory: [
      {
        category: 'Sizing Variety',
        details: 'Extensive range of sizes for all body types',
        rating: 5,
      },
      {
        category: 'Race Inclusivity',
        details: 'Strong representation across campaigns',
        rating: 4,
      },
      {
        category: 'Body-Positive Models',
        details: 'Focuses on self-confidence and diverse shapes',
        rating: 5,
      },
    ],
  },
] as const;

export async function fetchBrandById(brandId: string) {
  // mimic delay until server responds
  await new Promise((resolve) => setTimeout(resolve, 400));

  const brand = Brands.find((brand) => brand.id == brandId);
  if (!brand) {
    throw Error("No such brand");
  }

  return brand;
}

export async function fetchAllBrands() {
  // mimic delay until server responds
  await new Promise((resolve) => setTimeout(resolve, 400));

  return Brands;
}