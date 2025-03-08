import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer, City, Amenity } from '../../types/index.js';

const CITIES: Record<string, City> = {
  Paris: { name: 'Paris', latitude: 48.85661, longitude: 2.351499 },
  Cologne: { name: 'Cologne', latitude: 50.938361, longitude: 6.959974 },
  Brussels: { name: 'Brussels', latitude: 50.846557, longitude: 4.351697 },
  Amsterdam: { name: 'Amsterdam', latitude: 52.370216, longitude: 4.895168 },
  Hamburg: { name: 'Hamburg', latitude: 53.550341, longitude: 10.000654 },
  Dusseldorf: { name: 'Dusseldorf', latitude: 51.225402, longitude: 6.776314 },
};

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('Файл не был прочитан');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([
        title, description, postDate, cityName, previewImage, images, isPremium, isFavorite, rating, type, rooms, guests, price, amenities, authorName, authorEmail, authorAvatar, authorPassword, authorType, commentsCount, latitude, longitude
      ]) => ({
        title,
        description,
        postDate: new Date(postDate),
        city: CITIES[cityName],
        previewImage,
        images: images.split(';'),
        isPremium: isPremium === 'true',
        isFavorite: isFavorite === 'true',
        rating: parseFloat(rating),
        type: type as 'apartment' | 'house' | 'room' | 'hotel',
        rooms: parseInt(rooms, 10),
        guests: parseInt(guests, 10),
        price: parseInt(price, 10),
        amenities: amenities.split(';') as Amenity[],
        author: {
          name: authorName,
          email: authorEmail,
          avatarPath: authorAvatar || 'default-avatar.jpg',
          password: authorPassword,
          type: authorType as 'обычный' | 'pro',
        },
        commentsCount: parseInt(commentsCount, 10),
        coordinates: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
      }));
  }
}
