import React from 'react'
// import { Redirect } from 'react-router-dom'

const Home = React.lazy(() => import('@/view/Home'))
const BroadcastIndex = React.lazy(() => import('@/view/BroadcastIndex'))
const BroadcastDemo = React.lazy(() => import('@/view/broadcast/Broadcast'))
const BroadcastIntroduction = React.lazy(() => import('@/view/broadcast/Introduction'))
const ValidatorIndex = React.lazy(() => import('@/view/ValidatorIndex'))
const ValidatorDemo = React.lazy(() => import('@/view/validator/Demo'))
const ValidatorIntroduction = React.lazy(() => import('@/view/validator/Introduction'))

const MindcoreIndex = React.lazy(() => import('@/view/MindcoreIndex'))
const MindcoreDemo = React.lazy(() => import('@/view/mindcore/Demo'))
const MindcoreIntroduction = React.lazy(() => import('@/view/mindcore/Introduction'))

const GenericityIndex = React.lazy(() => import('@/view/GenericityIndex'))
const GenericityDemo = React.lazy(() => import('@/view/genericity/Demo'))
const GenericityIntroduction = React.lazy(() => import('@/view/genericity/Introduction'))

const routeList = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/broadcast',
    component: BroadcastIndex,
    routes: [
      {
        path: '/broadcast/demo',
        component: BroadcastDemo,
      },
      {
        path: '/broadcast/introduction',
        component: BroadcastIntroduction,
      },
    ],
  },
  {
    path: '/validator',
    component: ValidatorIndex,
    routes: [
      {
        path: '/validator/demo',
        component: ValidatorDemo,
      },
      {
        path: '/validator/introduction',
        component: ValidatorIntroduction,
      },
    ],
  },
  {
    path: '/mindcore',
    component: MindcoreIndex,
    routes: [
      {
        path: '/mindcore/demo',
        component: MindcoreDemo,
      },
      {
        path: '/mindcore/introduction',
        component: MindcoreIntroduction,
      },
    ],
  },
  {
    path: '/genericity',
    component: GenericityIndex,
    routes: [
      {
        path: '/genericity/demo',
        component: GenericityDemo,
      },
      {
        path: '/genericity/introduction',
        component: GenericityIntroduction,
      },
    ],
  },
]

export default routeList
