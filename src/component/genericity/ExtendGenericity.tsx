import * as React from 'react'

class Axios<T>{
  
}

export interface IExtendGenericityProps {}

export default class ExtendGenericity extends React.Component<IExtendGenericityProps> {
  public render() {
    return (
      <div>
        <hr/>
        <h2>对于泛型的补充应用</h2>
        <div>针对 api 层，结合模拟处理过的 axios 进行使用</div>
        <div>此次补充针对泛型的实例化以及开闭原则的实现</div>
      </div>
    )
  }
}
