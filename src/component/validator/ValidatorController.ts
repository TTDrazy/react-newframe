import { UserVO } from './../../model/validator/UserVO'
// import { makeAutoObservable } from 'mobx'
import { ValidatorService } from '../../service/validator/ValidatorService'

export default class ValidatorController {
  userService: ValidatorService
  constructor() {
    // makeAutoObservable(this)
    this.userService = new ValidatorService()
  }

  async getUserList() {
    const result = await this.userService.getList()
    return result
  }
}
