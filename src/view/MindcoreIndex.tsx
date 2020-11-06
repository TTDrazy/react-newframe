import React from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import Main from '../component/layout/Main'

const MindcoreIndex = (props: any) => {
  const { route } = props
  return (
    <Router>
      <Main>
        {/* 渲染子路由 */}
        {renderRoutes(route.routes)}
      </Main>
    </Router>
  )
}

export default React.memo(MindcoreIndex)
