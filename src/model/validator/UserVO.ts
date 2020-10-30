import { IUser } from './IUser'
import { IsNotEmpty, IsEmail, ValidationArguments } from 'class-validator'
import AbsBaseEntity from '../AbsBaseEntity'

export class UserVO extends AbsBaseEntity implements IUser {
  constructor(id: number, email: string) {
    super()
    this.id = id
    this.email = email
  }
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  @IsEmail(
    {},
    {
      message: (validationArguments: ValidationArguments) =>
        `${validationArguments.property}不是一条有效的邮箱类型`,
    }
  )
  email: string
}
