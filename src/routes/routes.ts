import type { LazyExoticComponent, ComponentType } from 'react'
import { lazy } from 'react'
import type { RouteProps } from 'react-router-dom'

type IRoute = RouteProps & {
  component: LazyExoticComponent<ComponentType<any>>
}

const ROUTES: IRoute[] = [
  {
    path: '/',
    component: lazy(async () => await import('../pages/Home')),
  },
  {
    path: '/dashboard/myAssignment',
    component: lazy(
      async () => await import('../pages/Dashboard/DashboardPages/Assignments')
    ),
  },
  {
    path: '/dashboard/myCourse',
    component: lazy(
      async () => await import('../pages/Dashboard/DashboardPages/MyCourse')
    ),
  },
  {
    path: '/dashboard/myAssignment/submit/:id',
    component: lazy(
      async () =>
        await import(
          '../pages/Dashboard/DashboardPages/Assignments/SubmitAssignment'
        )
    ),
  },
  {
    path: '/lecture/:slug',
    component: lazy(async () => await import('../pages/VideoSection')),
  },
  {
    path: 'course/:page',
    component: lazy(async () => await import('../pages/CoursePage/Ui')),
  },
  {
    path: '/dashboard/certification',
    component: lazy(
      async () => await import('../pages/Dashboard/DashboardCertification')
    ),
  },
  {
    path: '/cart',
    component: lazy(async () => await import('../pages/Cart')),
  },
  {
    path: '/resetpassword/:token',
    component: lazy(async () => await import('../pages/ResetPassword')),
  },
]

export default ROUTES
