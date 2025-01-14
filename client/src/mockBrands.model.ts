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
    name: 'Fashion Co.',
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
    name: 'Style Inc',
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
    name: 'Trendsetters Ltd.',
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
  {
    id: '4',
    name: 'The Good Clothes brand.',
    ratingOverall: 5,
    ratingByCategory: [
      {
        category: 'Sizing Variety',
        details: 'Has many sizes',
        rating: 5,
      },
      {
        category: 'Race Inclusivity',
        details: 'Showcasing diverse people',
        rating: 5,
      },
      {
        category: 'Body-Positive Models',
        details: 'Inclusive campaigns with body-positive messages',
        rating: 5,
      },
    ],
  },
  {
    id: '5',
    name: 'EcoFashion Hub.',
    ratingOverall: 4.5,
    ratingByCategory: [
      {
        category: 'Sizing Variety',
        details: 'Wide range of sizes',
        rating: 4,
      },
      {
        category: 'Race Inclusivity',
        details: 'Strong race inclusivity across marketing',
        rating: 5,
      },
      {
        category: 'Body-Positive Models',
        details: 'Focus on self-acceptance',
        rating: 4,
      },
    ],
  },
  {
    id: '6',
    name: 'Inclusive Wear Co.',
    ratingOverall: 4.7,
    ratingByCategory: [
      {
        category: 'Sizing Variety',
        details: 'Range of sizes from S to 3XL',
        rating: 5,
      },
      {
        category: 'Race Inclusivity',
        details: 'Inclusive campaigns with a focus on diversity',
        rating: 5,
      },
      {
        category: 'Body-Positive Models',
        details: 'Campaigns emphasize positive body image',
        rating: 4,
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

// Currently the type in mongo is:
// type BrandInMongo = {
//   _id: string;
//   name: string;
//   homePage: string;
//   logo: string;
// }

// export async function fetchAllBrands() {
//   const res = await fetch("http://localhost:4567/brands");
//   return await res.json();
// }