import {Amenity, CityName, Coordinates, PlaceType } from '../../../types/index.js';

export class CreateOfferDto {
  public title!: string;
  public description!: string;
  public city!: CityName;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public type!: PlaceType;
  public rating!: number;
  public rooms!: number;
  public guests!: number;
  public price!: number;
  public amenities!: Amenity[];
  public authorId!: string;
  public commentsCount!: number;
  public coordinates!: Coordinates;
}
