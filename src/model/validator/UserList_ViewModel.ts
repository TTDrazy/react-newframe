import { makeAutoObservable } from 'mobx'
import { UserVO } from './UserVO'
export default class UserList_ViewModel {
  constructor(userList: UserVO[]) {
    this.userList = userList
    makeAutoObservable(this)
  }
  userList: UserVO[]
}
