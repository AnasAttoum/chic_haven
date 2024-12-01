export interface product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: category
}

export interface category {
  id: number;
  name: string;
  image: string;
}