export type UserType = 'обычный' | 'pro';

export type User = {
  name: string;
  email: string;
  avatarPath: string;
  password: string;
  type: UserType;
};
