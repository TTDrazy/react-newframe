import * as React from 'react'

export interface IIntroductionProps {}

export default class Introduction extends React.Component<IIntroductionProps> {
  public render() {
    return (
      <div>
        <div>利用 class-validator 和设计模式中的装饰器模式，为所有的字段加入校验</div>
      </div>
    )
  }
}
