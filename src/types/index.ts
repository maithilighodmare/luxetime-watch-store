export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  brand: string;
  features: string[];
  specifications: Record<string, string>;
}

export interface CartItem extends Product {
  quantity: number;
}