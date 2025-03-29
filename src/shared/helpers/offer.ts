import {Amenity, CityName, Offer, PlaceType, UserType} from '../types/index.js';

export function createOffer(offerData: string): Offer {
  const [
    title,
    description,
    postDate,
    cityName,
    cityLatitude,
    cityLongitude,
    previewImage,
    images,
    isPremium,
    isFavorite,
    type,
    rating,
    rooms,
    guests,
    price,
    amenities,
    name,
    email,
    avatarPath,
    password,
    userType,
    commentsCount,
    latitude,
    longitude
  ] = offerData.replace('\n', '').split('\t');

  const city = {
    name: cityName as CityName,
    latitude: Number(cityLatitude),
    longitude: Number(cityLongitude),
  };

  const author = {
    name,
    email,
    avatarPath,
    password,
    type: userType as UserType,
  };

  const coordinates = {
    latitude: Number(latitude),
    longitude: Number(longitude),
  };

  return {
    title,
    description,
    postDate: new Date(postDate),
    city,
    previewImage,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    type: type as PlaceType,
    rating: Number(rating),
    rooms: Number(rooms),
    guests: Number(guests),
    price: Number(price),
    amenities: amenities.split(';') as Amenity[],
    author,
    commentsCount: Number(commentsCount),
    coordinates
  };
}
