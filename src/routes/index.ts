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

const LogIn = Loadable({
  loader: () => import('../pages/Login'),
  loading: Loading
})

const routes: Array<RouteItem> = [
  { path: '/', exact: true, component: Home, protected: false },
  { path: '/login', exact: true, component: LogIn, protected: false },
  { path: '/dashboard', exact: true, component: Dashboard, protected: true },
  { path: '/loading', exact: true, component: Loading, protected: false }
]

export default routes
