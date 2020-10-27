import * as React from 'react'
import style from './Main.module.scss'

export interface IMainProps {}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (
      <div className={style.container}>
        <div className={style.leftBox}>
          <div className={style.silder}>我是slider</div>
        </div>
        <div className={style.rightBox}>
          <div className={style.header}>我是header</div>
          <div className={style.content}>
            {this.props.children}
          </div>
          <div className={style.footer}>我是footer</div>
        </div>
      </div>
    )
  }
}
