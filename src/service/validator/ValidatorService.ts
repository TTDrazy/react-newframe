import { UserVO } from './../../model/validator/UserVO'
import { UserAPI } from './../../api/validator/UserAPI'
import { UserAddDTO } from '../../model/validator/UserAddDTO'
// import UserValidatorModel from '../../model/validator/UserValidatorModel'
import UserList_ViewModel from '../../model/validator/UserList_ViewModel'
// import UserValidatorModel from '../../model/validator/UserValidatorModel'

export class ValidatorService {
  userApi = new UserAPI()

  /**
   * 获取 user 的所有 list
   * @return 符合 UserVO 标准的所有数据的 list
   */
  async getList() {
    let list = await this.userApi.getAll()
    let result: UserVO[] = []

    list.map((item: any) =>
      // VO 不做效验，只有传数据库的时候才需要做 DTO 的效验
      result.push(new UserVO(item))
    )

    const { userList } = new UserList_ViewModel(result)
    return userList
  }

  /**
   * 添加一条 user 信息
   * @return 添加成功的信息
   */
  async addUser(email: string) {
    if (await new UserAddDTO(email).validator()) {
      let data = await this.userApi.addArticle(new UserAddDTO(email))
      return data
    }
  }
}
