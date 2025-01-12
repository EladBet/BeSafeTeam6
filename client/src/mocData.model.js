import modelImage from './assets/model.jpeg';

const mockData = [
  {
    id: 1,
    name: 'Fashion Co.',
    image: modelImage,
    rating: 50,
    championNumber: 1,
    details: {
      userRating: 40,
      sizeRange: 'XS-XXL',
      description:
        'Fashion Co. is a global leader in promoting positive body image through inclusive and diverse campaigns.',
    },
  },
  {
    id: 2,
    name: 'Style Inc.',
    image: modelImage,
    rating: 40,
    championNumber: 2,
    details: {
      userRating: 42,
      sizeRange: 'S-XL',
      description: 'Style Inc. focuses on creating inclusive clothing for all body types.',
    },
  },
  {
    id: 3,
    name: 'Trendsetters Ltd.',
    image: modelImage,
    rating: 38,
    championNumber: 3,
    details: {
      userRating: 40,
      sizeRange: 'M-3XL',
      description: 'Trendsetters Ltd. is known for its campaigns that embrace diversity.',
    },
  },
];

export default mockData;
