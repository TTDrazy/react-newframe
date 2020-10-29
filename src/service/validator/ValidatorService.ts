import { UserVO } from './../../model/validator/UserVO'
import { UserAPI } from './../../api/validator/UserAPI'

export class ValidatorService {
  userApi = new UserAPI()

  async getList() {
    let result = []
    let list = await this.userApi.getAll()
    list.map((item) => {
      result.push(new UserVO(item.id, item.email))
    })
    return result
  }
}
