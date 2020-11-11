export class UserVO {
  constructor({ id, email, phone }: UserVO = { id: 1, email: '', phone: '' }) {
    this.id = id
    this.email = email
    this.phone = phone
  }

  id: number
  email: string
  phone: string
}
