import React from 'react'
// import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@/view/Home'))
const Broadcast = React.lazy(() => import('@/view/broadcast/Broadcast'))

const routeList = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/broadcast',
    component: Broadcast,
  },
]

export default routeList
