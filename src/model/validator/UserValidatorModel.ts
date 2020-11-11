import {
  IsNotEmpty,
  IsEmail,
  ValidationArguments,
  IsPhoneNumber,
} from 'class-validator'
import BaseEntity from '../BaseEntity'
import { UserVO } from './UserVO'

export default class UserValidatorModel extends BaseEntity {
  constructor(
    { id, email, phone }: UserVO = {
      id: 0,
      email: '',
      phone: '',
    }
  ) {
    super()
    this.id = id
    this.email = email
    this.phone = phone
  }
  @IsNotEmpty()
  id: number

  @IsNotEmpty({
    message: (validationArguments: ValidationArguments) =>
      `${validationArguments.property}不可以为空`,
  })
  @IsEmail(
    {},
    {
      message: (validationArguments: ValidationArguments) =>
        `${validationArguments.property}不是一条有效的邮箱类型`,
    }
  )
  email: string

  @IsNotEmpty({
    message: (validationArguments: ValidationArguments) =>
      `${validationArguments.property}不可以为空`,
  })
  @IsPhoneNumber('US', {
    message: (validationArguments: ValidationArguments) =>
      `${validationArguments.property}不是一条有效的邮箱类型`,
  })
  phone: string
}
