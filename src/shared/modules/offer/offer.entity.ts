import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Amenity, City, CityName, Coordinates, PlaceType } from '../../types/index.js';
import {UserEntity} from '../user/index.js';
import {CommentEntity} from "../comment/index.js";

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

const CITIES_COORDINATES: Record<CityName, Coordinates> = {
  Paris: { latitude: 48.85661, longitude: 2.351499 },
  Cologne: { latitude: 50.938361, longitude: 6.959974 },
  Brussels: { latitude: 50.846557, longitude: 4.351697 },
  Amsterdam: { latitude: 52.370216, longitude: 4.895168 },
  Hamburg: { latitude: 53.550341, longitude: 10.000654 },
  Dusseldorf: { latitude: 51.225402, longitude: 6.776314 }
};

const PLACE_TYPES: PlaceType[] = ['apartment', 'house', 'room', 'hotel'];
const AMENITIES: Amenity[] = ['Breakfast', 'Air conditioning', 'Laptop friendly workspace', 'Baby seat', 'Washer', 'Towels', 'Fridge'];

@modelOptions({
  schemaOptions: {
    collection: 'offers',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function(_doc, ret) {
        delete ret._id;
        return ret;
      }
    },
    toObject: {
      virtuals: true,
      transform: function(_doc, ret) {
        delete ret._id;
        return ret;
      }
    }
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    required: true,
    minlength: 10,
    maxlength: 100,
    trim: true
  })
  public title!: string;

  @prop({
    required: true,
    minlength: 20,
    maxlength: 1024,
    trim: true
  })
  public description!: string;

  @prop({
    required: true,
    default: Date.now
  })
  public postDate!: Date;

  @prop({
    required: true,
    enum: Object.keys(CITIES_COORDINATES),
  })
  public city!: City;

  @prop({
    required: true,
    match: [/\.(jpg|png)$/i, 'Preview image must be a JPG or PNG image']
  })
  public previewImage!: string;

  @prop({
    required: true,
  })
  public images!: string[];

  @prop({ required: true, default: false })
  public isPremium!: boolean;

  @prop({ required: true, default: false })
  public isFavorite!: boolean;

  @prop({
    required: true,
    min: 1,
    max: 5,
    default: 1
  })
  public rating!: number;

  @prop({
    required: true,
    enum: PLACE_TYPES,
    validate: {
      validator: (v: PlaceType) => PLACE_TYPES.includes(v),
      message: 'Invalid place type'
    }
  })
  public type!: PlaceType;

  @prop({
    required: true,
    min: 1,
    max: 8
  })
  public rooms!: number;

  @prop({
    required: true,
    min: 1,
    max: 10
  })
  public guests!: number;

  @prop({
    required: true,
    min: 100,
    max: 100000
  })
  public price!: number;

  @prop({
    required: true,
    enum: AMENITIES,
    type: [String],
    validate: {
      validator: (v: Amenity[]) => v.length > 0 && v.every((a) => AMENITIES.includes(a)),
      message: 'At least one amenity must be provided'
    }
  })
  public amenities!: Amenity[];

  @prop({
    required: true,
    ref: UserEntity
  })
  public authorId!: Ref<UserEntity>;

  @prop({
    required: true,
    default: 0
  })
  public commentsCount!: number;

  @prop({
    required: true,
    validate: {
      validator: (v: Coordinates) =>
        v.latitude >= -90 &&
        v.latitude <= 90 &&
        v.longitude >= -180 &&
        v.longitude <= 180,
      message: 'Invalid coordinates'
    }
  })
  public coordinates!: Coordinates;

  @prop({
    ref: 'CommentEntity',
    foreignField: 'offerId',
    localField: '_id',
    justOne: false
  })
  public comments?: Ref<CommentEntity>[];
}

export const OfferModel = getModelForClass(OfferEntity);
