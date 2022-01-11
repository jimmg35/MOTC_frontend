import Loading from '../pages/Loading'
import { RouteItem } from './interface'
import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('../pages/MapPage'),
  loading: Loading
})

const routes: Array<RouteItem> = [
  { path: '/', exact: true, component: Home }
]
export default routes
