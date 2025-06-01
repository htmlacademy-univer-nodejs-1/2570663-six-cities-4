export enum UserTypeEnum {
  Regular = 'обычный',
  Pro = 'pro'
}

export type UserType = keyof typeof UserTypeEnum;

export type User = {
  name: string;
  email: string;
  avatarPath: string;
  password: string;
  type: UserType;
};
