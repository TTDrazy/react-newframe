import * as React from 'react'
import { Menu, Button } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ProfileOutlined,
  MailOutlined,
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
                  <Menu.Item key="5" onClick={() => this.toRoute('/broadcast')}>
                    增加数字
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  icon={<AppstoreOutlined />}
                  title="Navigation Two"
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                  </SubMenu>
                </SubMenu>
              </Menu>
            </div>
          </div>
        </div>
        <div className={style.rightBox}>
          <div className={style.header}>
            <Button type="primary" onClick={this.toggleCollapsed}>
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
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
