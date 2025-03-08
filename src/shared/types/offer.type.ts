import { User } from './user.type.js';

export type City = {
  name: 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
  latitude: number;
  longitude: number;
};

export type Amenity = 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: 'apartment' | 'house' | 'room' | 'hotel';
  rooms: number;
  guests: number;
  price: number;
  amenities: Amenity[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
};
