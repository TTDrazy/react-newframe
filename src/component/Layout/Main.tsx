import * as React from 'react'
import { Menu, Button } from 'antd'
import {
  ScheduleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProfileOutlined,
  MailOutlined,
  FolderViewOutlined,
  BulbOutlined,
} from '@ant-design/icons'
import style from './Main.module.scss'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const { SubMenu } = Menu

export interface MainProps extends RouteComponentProps {
  //
}

class Main extends React.Component<MainProps> {
  state = {
    collapsed: false,
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  toRoute = (path: string) => {
    this.props.history.push(path)
  }
  public render() {
    return (
      <div className={style.container}>
        <div className={style.leftBox}>
          <div className={style.silder}>
            <div>
              <Menu
                defaultSelectedKeys={['introduction']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
              >
                <Menu.Item
                  key="introduction"
                  icon={<ProfileOutlined />}
                  onClick={() => this.toRoute('/')}
                >
                  简介
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="单播与广播">
                  <Menu.Item key="2" onClick={() => this.toRoute('/broadcast/introduction')}>
                    介绍
                  </Menu.Item>
                  <Menu.Item key="3" onClick={() => this.toRoute('/broadcast/demo')}>
                    栗子
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<ScheduleOutlined />} title="数据校验">
                  <Menu.Item key="4" onClick={() => this.toRoute('/validator/introduction')}>
                    介绍
                  </Menu.Item>
                  <Menu.Item key="5" onClick={() => this.toRoute('/validator/demo')}>
                    栗子
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<BulbOutlined />} title="基础核心概念">
                  <Menu.Item key="6" onClick={() => this.toRoute('/mindcore/introduction')}>
                    介绍
                  </Menu.Item>
                  <Menu.Item key="7" onClick={() => this.toRoute('/mindcore/demo')}>
                    栗子
                  </Menu.Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<FolderViewOutlined />} title="泛型">
                  <Menu.Item key="8" onClick={() => this.toRoute('/genericity/introduction')}>
                    介绍
                  </Menu.Item>
                  <Menu.Item key="9" onClick={() => this.toRoute('/genericity/demo')}>
                    栗子
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </div>
        <div className={style.rightBox}>
          <div className={style.header}>
            <Button type="primary" onClick={this.toggleCollapsed}>
              {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
            </Button>
            <div className={style.title}>react-newframe</div>
          </div>
          <div className={style.content}>{this.props.children}</div>
          <div className={style.footer}>Design By Drazy</div>
        </div>
      </div>
    )
  }
}
export default withRouter(Main as any)
