import {CityName, PlaceType} from '../../../types/index.js';

export class ShortOfferDto {
  public id!: string;
  public title!: string;
  public type!: PlaceType;
  public price!: number;
  public city!: CityName;
  public previewImage!: string;
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public commentsCount!: number;
  public postDate!: Date;
}
