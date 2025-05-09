import {Amenity, CityName, Coordinates, PlaceType} from "../../../types/index.js";
import {UserDto} from "../../user/dto/user.dto.js";

export class OfferDto {
  public id!: string;
  public title!: string;
  public description!: string;
  public postDate!: Date;
  public city!: CityName;
  public previewImage!: string;
  public images!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public type!: PlaceType;
  public rooms!: number;
  public guests!: number;
  public price!: number;
  public amenities!: Amenity[];
  public author!: UserDto;
  public commentsCount!: number;
  public coordinates!: Coordinates;
}
