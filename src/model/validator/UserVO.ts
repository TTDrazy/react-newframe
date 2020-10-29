import { IsNotEmpty, IsEmail } from 'class-validator'
import AbsBaseEntity from '../AbsBaseEntity'

export class UserVO extends AbsBaseEntity{
  constructor(id: number, email: string) {
    super()
    this.id = id
    this.email = email
  }
  @IsNotEmpty()
  id: number

  @IsNotEmpty()
  @IsEmail()
  email: string
}
