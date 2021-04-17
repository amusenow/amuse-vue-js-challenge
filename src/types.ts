export interface Product {
  entity_id: number;
  sku: string;
  is_cannabis: number;
  manufacturer: string;
  name: string;
  url: string;
  category: string;
  sub_category: string;
  image_url: string;
  price: number;
  thc_percentage: number;
  quantity: number;
}

export interface RootState {
  loading: boolean;
  error: string | null;
  products: Product[];
  page: number;
  selectedCategories: string[];
}
