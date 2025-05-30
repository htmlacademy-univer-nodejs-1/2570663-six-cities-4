import {Amenity, CityName, Coordinates, PlaceType} from '../../../types/index.js';

export class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public city?: CityName;
  public previewImage?: string;
  public images?: string[];
  public isPremium?: boolean;
  public type?: PlaceType;
  public rooms?: number;
  public guests?: number;
  public price?: number;
  public amenities?: Amenity[];
  public coordinates?: Coordinates;
}
