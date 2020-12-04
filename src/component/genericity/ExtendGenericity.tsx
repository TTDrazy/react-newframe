import * as React from 'react'

// 泛型的构造函数类型
type Constructor<D> = new (...arg: any[]) => D

interface IVO {}
interface IDTO {
  id: number
}

interface IMenuVO extends IVO {
  treeList: []
}

interface IMenuDTO extends IDTO {}

interface IValidatorModel {
  validator(): boolean // 校验方法
}

interface IApi<V extends IVO, D extends IDTO> {
  getAll(): Promise<V[]>
  getById(id: number): Promise<V>
  add(d: D): Promise<V>
  update(d: D): Promise<V>
  delete(id: number): Promise<V>
}

interface IMenuAPI extends ABSApi<IMenuVO, IMenuDTO> {
  getTree(): IMenuVO
}

abstract class ABSValidatorModel implements IValidatorModel {
  validator(): boolean {
    throw new Error('Method not implemented.')
  }
}

abstract class ABSDTO extends ABSValidatorModel implements IDTO {
  id: any
}
// api 的泛型抽象类,实际上也是泛型抽象工厂
// 之所以是抽象类是因为我不想让他能够实例化，而仅仅让它能够继承
abstract class ABSApi<V extends IVO, D extends IDTO> implements IApi<V, D> {
  path: string
  axios: Axios<D>
  TConstructor: Constructor<D>
  constructor(path: string, newConstructor: Constructor<D>) {
    this.path = path
    this.axios = new Axios<D>()
    this.TConstructor = newConstructor
  }
  //实现方法
  async getAll(): Promise<V[]> {
    return await this.axios.get(this.path)
  }
  async getById(id: number): Promise<V> {
    return await this.axios.get(this.path + id)
  }
  async add(d: D): Promise<V> {
    const dto = new this.TConstructor(d)
    return await this.axios.post(this.path, dto)
  }
  async update(d: D): Promise<V> {
    const dto = new this.TConstructor(d)
    return await this.axios.put(this.path, dto)
  }
  async delete(id: number): Promise<V> {
    return await this.axios.delete(this.path + id)
  }
}

// axios 泛型方法类
class Axios<T> {
  get(path: string, id?: number): any {}
  post(path: string, DTOobj: T): any {}
  put(path: string, DTOobj: T): any {}
  delete(path: string, id?: number): any {}
}

class MenuVO implements IMenuVO {
  treeList
  constructor(treeList: []) {
    this.treeList = treeList
  }
}

class MenuDTO extends ABSDTO implements IMenuDTO {
  id: number
  parentId: number | null
  name: string
  constructor(param?: { id?: number; parentId?: number; name?: string }) {
    super()
    this.id = param?.id ?? 0
    this.parentId = param?.parentId ?? null
    this.name = param?.name ?? ''
  }
}

class MenuAPI extends ABSApi<MenuVO, MenuDTO> implements IMenuAPI {
  constructor() {
    super('/menu', MenuDTO)
  }
  getTree(): IMenuVO {
    console.log('我返回了一个 tree')
    const vo = new MenuVO([])
    return vo
  }
}

export interface IExtendGenericityProps {}

export default class ExtendGenericity extends React.Component<IExtendGenericityProps> {
  public render() {
    let menuApi = new MenuAPI()
    menuApi.getAll()
    menuApi.getById(2)
    menuApi.add(new MenuDTO({ id: 5, parentId: 1, name: '哈哈' }))
    menuApi.update(new MenuDTO({ id: 6, parentId: 2, name: '哈哈222' }))
    menuApi.delete(3)
    menuApi.getTree()
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
