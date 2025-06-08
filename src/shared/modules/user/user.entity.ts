import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { User, UserType } from '../../types/index.js';
import { createSHA256 } from '../../helpers/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface UserEntity extends defaultClasses.Base {}

const DEFAULT_AVATAR_PATH = '/static/default-avatar.jpg';

@modelOptions({
  schemaOptions: {
    collection: 'users',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class UserEntity extends defaultClasses.TimeStamps implements User {
  @prop({
    required: true,
    minlength: [1, 'Name must be at least 1 character long'],
    maxlength: [15, 'Name cannot exceed 15 characters'],
    trim: true
  })
  public name: string;

  @prop({
    required: true,
    unique: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please provide a valid email address'],
    trim: true
  })
  public email: string;

  @prop({
    required: false,
    default: DEFAULT_AVATAR_PATH,
    match: [/\.(jpg|png)$/i, 'Avatar must be a JPG or PNG image']
  })
  public avatarPath: string;

  @prop({ required: true, default: '' })
  public password!: string;

  @prop({
    required: true,
    enum: ['обычный', 'pro'],
    default: 'обычный',
  })
  public type: UserType;

  constructor(userData: User) {
    super();
    this.name = userData.name;
    this.email = userData.email;
    this.avatarPath = userData.avatarPath || DEFAULT_AVATAR_PATH;
    this.type = userData.type;
  }

  public setPassword(password: string, salt: string) {
    this.password = createSHA256(password, salt);
  }

  public verifyPassword(password: string, salt: string) {
    const hashPassword = createSHA256(password, salt);
    console.log(this.password);
    return hashPassword === this.password;
  }

  public getAvatarPath() {
    return this.avatarPath || DEFAULT_AVATAR_PATH;
  }
}

export const UserModel = getModelForClass(UserEntity);
