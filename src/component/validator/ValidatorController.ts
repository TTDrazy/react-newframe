import { UserVO } from './../../model/validator/UserVO'
import { makeAutoObservable } from 'mobx'
import { ValidatorService } from '../../service/validator/ValidatorService'

export default class ValidatorController {
  userService: ValidatorService
  constructor() {
    makeAutoObservable(this)
    this.userService = new ValidatorService()
  }

  async getUserList() {
    let result: UserVO[]
    result = await this.userService.getList()
    return result
  }
}
export class UserControllerInstance {
  // 使用单例模式使其每次返回为同一个 service，实现多播
  static userControllerInstance: ValidatorController = new ValidatorController()
  private constructor() {}
}
