import { IsNotEmpty, IsEmail, ValidationArguments } from 'class-validator'
import BaseEntity from '../BaseEntity'

export class UserAddDTO extends BaseEntity {
  constructor(email: string) {
    super()
    this.email = email
  }
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
}
