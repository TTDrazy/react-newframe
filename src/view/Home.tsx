import * as React from 'react'
import Main from '../component/layout/Main'

export default class Home extends React.Component {
  public render() {
    return (
      <div>
        <Main>
          <div> 一套基于 react 和 typescript 的框架</div>

          <div>
            尽量将各个层之间的关系都分离开，使 react 回归最原本的 view 渲染
          </div>

          <div>
            其中利用到的设计模式会在之前的{' '}
            <a href="https://github.com/TTDrazy/DesignPattern">
              设计模式案例集合
            </a>{' '}
            中进行补充
          </div>

          <div>
            具体更新内容详见{' '}
            <a href="https://github.com/TTDrazy/react-newframe/blob/master/CHANGELOG.md">
              更新日志
            </a>{' '}
          </div>
        </Main>
      </div>
    )
  }
}
