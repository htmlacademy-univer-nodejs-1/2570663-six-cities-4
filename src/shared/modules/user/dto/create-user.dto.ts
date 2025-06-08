import {UserType, UserTypeEnum} from '../../../types/index.js';
import {IsEmail, IsEnum, IsString, Length} from 'class-validator';
import {CreateUserValidationMessage} from './create-user.messages.js';

export class CreateUserDto {
  @IsString({ message: CreateUserValidationMessage.name.invalidFormat })
  @Length(1, 15, { message: CreateUserValidationMessage.name.length })
  public name!: string;

  @IsEmail({}, { message: CreateUserValidationMessage.email.invalidFormat })
  public email!: string;

  @IsString({ message: CreateUserValidationMessage.password.invalidFormat })
  @Length(6, 12, { message: CreateUserValidationMessage.password.length })
  public password!: string;

  @IsEnum(UserTypeEnum, { message: CreateUserValidationMessage.type.invalid })
  public type!: UserType;
}
