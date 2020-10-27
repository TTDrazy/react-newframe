import React from 'react'
// import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@/view/Home'))
const Broadcast = React.lazy(() => import('@/view/Broadcast'))

const routeList = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/broadcast',
        component: Broadcast,
      },
    ],
  },
]

export default routeList
