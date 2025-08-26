import { Property } from '@/types/property';

export const properties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    description: 'Luxurious 2-bedroom apartment in the heart of downtown with stunning city views and modern amenities.',
    price: 450000,
    location: 'Downtown',
    type: 'apartment',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    features: ['Balcony', 'Gym', 'Pool', 'Parking', 'Security'],
    status: 'for-sale',
    address: '123 Main St, Downtown',
    yearBuilt: 2020,
    parking: 1
  },
  {
    id: '2',
    title: 'Family Home with Garden',
    description: 'Beautiful 4-bedroom family home with a large garden, perfect for growing families.',
    price: 750000,
    location: 'Suburbs',
    type: 'house',
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&h=600&fit=crop'
    ],
    features: ['Garden', 'Garage', 'Fireplace', 'Basement', 'Deck'],
    status: 'for-sale',
    address: '456 Oak Ave, Suburbs',
    yearBuilt: 2015,
    parking: 2
  },
  {
    id: '3',
    title: 'Luxury Condo with Ocean View',
    description: 'Premium 3-bedroom condo with breathtaking ocean views and resort-style amenities.',
    price: 1200000,
    location: 'Beachfront',
    type: 'condo',
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    features: ['Ocean View', 'Pool', 'Gym', 'Concierge', 'Beach Access'],
    status: 'for-sale',
    address: '789 Beach Blvd, Beachfront',
    yearBuilt: 2022,
    parking: 2
  },
  {
    id: '4',
    title: 'Cozy Townhouse',
    description: 'Charming 3-bedroom townhouse in a quiet neighborhood with modern updates.',
    price: 380000,
    location: 'Midtown',
    type: 'townhouse',
    bedrooms: 3,
    bathrooms: 2,
    area: 1600,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop'
    ],
    features: ['Patio', 'Storage', 'Updated Kitchen', 'Hardwood Floors'],
    status: 'for-rent',
    address: '321 Pine St, Midtown',
    yearBuilt: 2018,
    parking: 1
  },
  {
    id: '5',
    title: 'Investment Property',
    description: 'Prime commercial land perfect for development or investment.',
    price: 250000,
    location: 'Business District',
    type: 'land',
    bedrooms: 0,
    bathrooms: 0,
    area: 5000,
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop'
    ],
    features: ['Zoned Commercial', 'High Traffic', 'Utilities Available'],
    status: 'for-sale',
    address: '555 Business Ave, Business District'
  },
  {
    id: '6',
    title: 'Studio Apartment',
    description: 'Perfect starter home or investment property in a great location.',
    price: 280000,
    location: 'Downtown',
    type: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop'
    ],
    features: ['Modern Kitchen', 'Walk-in Closet', 'Balcony'],
    status: 'for-sale',
    address: '999 Urban St, Downtown',
    yearBuilt: 2019,
    parking: 0
  }
];

export const locations = ['Downtown', 'Suburbs', 'Beachfront', 'Midtown', 'Business District'];
export const propertyTypes = ['house', 'apartment', 'condo', 'townhouse', 'land'];
export const statuses = ['for-sale', 'for-rent', 'sold']; 