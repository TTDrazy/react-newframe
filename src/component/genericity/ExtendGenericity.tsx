import * as React from 'react'

interface IVO {}
interface IDTO {
  id: number
}

interface IValidatorModel {
  validator(): boolean // 校验方法
}

interface IApi<V extends IVO, D extends IDTO> {
  getAll(): V[]
  getById(id: number): V
  add(d: D): V
  update(d: D): V
  delete(id: number): V
}

abstract class ABSValidatorModel implements IValidatorModel {
  validator(): boolean {
    throw new Error('Method not implemented.')
  }
}

abstract class ABSDTO extends ABSValidatorModel implements IDTO {
  id: number
}
// api 的泛型抽象类
abstract class ABSApi<V extends IVO, D extends IDTO> implements IApi<V, D> {
  path: string
  axios: Axios<D>
  TController: Controller<D>
}

// axios 泛型方法类
class Axios<T> {
  get<T>(path: string, id?: number): any {}
  post<T>(path: string, DTOobj: any) {}
  put<T>(path: string, DTOobj: any) {}
  delete<T>(path: string, id?: number) {}
}

export interface IExtendGenericityProps {}

export default class ExtendGenericity extends React.Component<IExtendGenericityProps> {
  public render() {
    return (
      <div>
        <hr />
        <h2>对于泛型的补充应用</h2>
        <div>针对 api 层，结合模拟处理过的 axios 进行使用</div>
        <div>此次补充针对泛型的实例化以及开闭原则的实现</div>
      </div>
    )
  }
}
