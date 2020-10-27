import React, { Suspense } from 'react'
import './App.less'
import { HashRouter as Router, Route } from 'react-router-dom'
import routeList from './route/route.js'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>路由加载中，抱抱你，等一下下哦~</div>}>
        {routeList.map((item: any) => {
          if (item.exact) {
            return <Route path={item.path} exact component={item.component} />
          } else {
            return <Route path={item.path} component={item.component} />
          }
        })}
      </Suspense>
    </Router>
  )
}

export default App
