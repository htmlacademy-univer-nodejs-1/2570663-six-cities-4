import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested
} from 'class-validator';
import { Type } from 'class-transformer';
import {Amenity, AmenityEnum, CityName, CityNameEnum, PlaceType, PlaceTypeEnum} from '../../../types/index.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';

export class CoordinatesDto {
  @IsNumber({}, { message: CreateOfferValidationMessage.coordinates.latitude.invalidFormat })
  @Min(-90, { message: CreateOfferValidationMessage.coordinates.latitude.minValue })
  @Max(90, { message: CreateOfferValidationMessage.coordinates.latitude.maxValue })
  public latitude!: number;

  @IsNumber({}, { message: CreateOfferValidationMessage.coordinates.longitude.invalidFormat })
  @Min(-180, { message: CreateOfferValidationMessage.coordinates.longitude.minValue })
  @Max(180, { message: CreateOfferValidationMessage.coordinates.longitude.maxValue })
  public longitude!: number;
}

export class CreateOfferDto {
  @IsString({ message: CreateOfferValidationMessage.title.invalidFormat })
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  public title!: string;

  @IsString({ message: CreateOfferValidationMessage.description.invalidFormat })
  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  public description!: string;

  @IsEnum(CityNameEnum, { message: CreateOfferValidationMessage.city.invalid })
  public city!: CityName;

  @IsUrl({}, { message: CreateOfferValidationMessage.previewImage.invalidFormat })
  public previewImage!: string;

  @IsArray({ message: CreateOfferValidationMessage.images.invalidFormat })
  @IsUrl({}, { each: true, message: CreateOfferValidationMessage.images.invalidItems })
  @MaxLength(6, { message: CreateOfferValidationMessage.images.maxSize })
  @MinLength(6, { message: CreateOfferValidationMessage.images.minSize })
  public images!: string[];

  @IsBoolean({ message: CreateOfferValidationMessage.isPremium.invalidFormat })
  public isPremium!: boolean;

  @IsEnum(PlaceTypeEnum, { message: CreateOfferValidationMessage.type.invalid })
  public type!: PlaceType;

  @IsInt({ message: CreateOfferValidationMessage.rooms.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.rooms.minValue })
  @Max(8, { message: CreateOfferValidationMessage.rooms.maxValue })
  public rooms!: number;

  @IsInt({ message: CreateOfferValidationMessage.guests.invalidFormat })
  @Min(1, { message: CreateOfferValidationMessage.guests.minValue })
  @Max(10, { message: CreateOfferValidationMessage.guests.maxValue })
  public guests!: number;

  @IsInt({ message: CreateOfferValidationMessage.price.invalidFormat })
  @Min(100, { message: CreateOfferValidationMessage.price.minValue })
  @Max(100000, { message: CreateOfferValidationMessage.price.maxValue })
  public price!: number;

  @IsArray({ message: CreateOfferValidationMessage.amenities.invalidFormat })
  @IsEnum(AmenityEnum, { each: true, message: CreateOfferValidationMessage.amenities.invalidItems })
  public amenities!: Amenity[];

  @IsString({ message: CreateOfferValidationMessage.authorId.invalidFormat })
  public authorId!: string;

  @ValidateNested()
  @Type(() => CoordinatesDto)
  public coordinates!: CoordinatesDto;
}
