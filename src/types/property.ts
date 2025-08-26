export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'land';
  bedrooms: number;
  bathrooms: number;
  area: number; // in sq ft
  images: string[];
  features: string[];
  status: 'for-sale' | 'for-rent' | 'sold';
  address: string;
  yearBuilt?: number;
  parking?: number;
}

export interface PropertyFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  type: string;
  bedrooms: number;
  bathrooms: number;
  status: string;
} 