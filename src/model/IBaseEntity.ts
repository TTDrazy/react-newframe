export interface IBaseEntity {
  // 每个实现此接口的都必须具有 validator 方法
  validator(): Promise<any>
}
