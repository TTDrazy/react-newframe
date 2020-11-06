import * as React from 'react'

export interface IIntroductionProps {}

export default class Introduction extends React.Component<IIntroductionProps> {
  public render() {
    return (
      <div>
        <div>简单练习依赖注入、控制正转、控制反转、ioc 容器</div>
      </div>
    )
  }
}
