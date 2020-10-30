import { IBaseEntity } from './IBaseEntity'
import { validateOrReject } from 'class-validator'

export default class AbsBaseEntity implements IBaseEntity {
  async validator() {
    try {
      // this 指向每个继承此抽象接口的类
      await validateOrReject(this)
      return true
    } catch (errors: any | undefined) {
      const targetId = errors[0].target.id
      if (errors.length > 0) {
        // 遍历错误的 item
        for (let key in errors[0].constraints) {
          console.log(`id 为 ${targetId} 的条目捕获到错误。错误类型为:${key}`)
        }
      }
    }
  }
}
