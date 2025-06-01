import { User } from './user.type.js';

export enum CityNameEnum {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export type CityName = `${CityNameEnum}`;

export type City = {
  name: CityName;
  latitude: number;
  longitude: number;
};

export enum PlaceTypeEnum {
  Apartment = 'apartment',
  House = 'house',
  Room = 'room',
  Hotel = 'hotel'
}

export type PlaceType = `${PlaceTypeEnum}`;

export enum AmenityEnum {
  Breakfast = 'Breakfast',
  AirConditioning = 'Air conditioning',
  LaptopFriendlyWorkspace = 'Laptop friendly workspace',
  BabySeat = 'Baby seat',
  Washer = 'Washer',
  Towels = 'Towels',
  Fridge = 'Fridge'
}

export type Amenity = `${AmenityEnum}`;

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
  type: PlaceType;
  rating: number;
  rooms: number;
  guests: number;
  price: number;
  amenities: Amenity[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
};
