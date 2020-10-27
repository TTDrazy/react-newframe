import React, { Suspense } from 'react'
import './App.less'
import { HashRouter as Router, Route } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routeList from './route/route.js'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>路由加载中，抱抱你，等一下下哦~</div>}>
        {renderRoutes(routeList)}
      </Suspense>
    </Router>
  )
}

export default App
