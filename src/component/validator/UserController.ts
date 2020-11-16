import { makeAutoObservable } from 'mobx'
import { ValidatorService } from '../../service/validator/ValidatorService'
import { UserVO } from '../../model/validator/UserVO'

export default class UserController {
  userList: UserVO[]
  userService: ValidatorService
  constructor() {
    makeAutoObservable(this)
    this.userService = new ValidatorService()
    this.userList = []
    this.initUserList()
  }
  /**
   * 初始化 userList 的内容
   */
  async initUserList() {
    this.userList = await this.userService.getList()
  }
}
