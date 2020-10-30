import { IsNotEmpty, IsEmail, ValidationArguments } from 'class-validator'
import AbsBaseEntity from '../AbsBaseEntity'

export class UserAddDTO extends AbsBaseEntity {
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
