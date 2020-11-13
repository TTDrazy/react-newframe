import { makeAutoObservable } from 'mobx'

export class UserVO {
  constructor({ id, email, phone }: UserVO = { id: 1, email: '', phone: '' }) {
    this.id = id
    this.email = email
    this.phone = phone
    // 对 VO 进行观察
    makeAutoObservable(this)
  }

  id: number
  email: string
  phone: string
}
