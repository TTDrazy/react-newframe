import React from 'react'
// import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@/view/Home'))

const routeList = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
]

export default routeList
