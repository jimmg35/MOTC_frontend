import Loading from '../pages/Loading'
import { RouteItem } from './interface'
import Loadable from 'react-loadable'
// import Dashboard from '../common/Dashboard/Dashboard'

const Home = Loadable({
  loader: () => import('../pages/MapPage'),
  loading: Loading
})

const Dashboard = Loadable({
  loader: () => import('../pages/Dashboard'),
  loading: Loading
})

const routes: Array<RouteItem> = [
  { path: '/', exact: true, component: Home },
  { path: '/dashboard', exact: true, component: Dashboard },
  { path: '/loading', exact: true, component: Loading }
]

export const dashboardRoutes: Array<RouteItem> = [
  { path: '/dashboard/loading', exact: true, component: Loading }
]

export default routes
