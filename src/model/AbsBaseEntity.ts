import { IBaseEntity } from './IBaseEntity'
import { validateOrReject } from 'class-validator'

export default class AbsBaseEntity implements IBaseEntity {
  async validator() {
    try {
      // this 指向每个继承此抽象接口的类
      await validateOrReject(this)
    } catch (errors: any | undefined) {
      console.log(
        '捕获到错误. 错误为: ',
        errors
      )
    }
  }
}
