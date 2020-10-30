import { IUser } from './../../model/validator/IUser'
import { UserVO } from './../../model/validator/UserVO'
import { UserAPI } from './../../api/validator/UserAPI'

export class ValidatorService {
  userApi = new UserAPI()

  async getList() {
    let list = await this.userApi.getAll()
    let result: UserVO[] = []
    // map 中使用 异步函数
    await Promise.all(
      list.map(async (item: IUser) => {
        // 效验后台数据是否符合 UserVO 的展示标准，符合就推进展示数据中，不符合则将捕获其错误并打印出来
        if (await new UserVO(item.id, item.email).validator()) {
          result.push(new UserVO(item.id, item.email))
        }
      })
    )
    return result
  }
}
