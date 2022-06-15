/* eslint-disable */
import React, { FC } from 'react'
import routes from './routes'
import authStatus from './routes/AuthStatus/AuthStatus'
import ArcGIS from './lib/ArcGIS'
import { authStatusContext } from './routes/AuthStatus/AuthStatusProvider'
import { arcGisContext } from './lib/MapProvider'
import ProtectedRoute from './routes/ProtectedRoute'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from './pages/Loading'
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'
import MapPage from './pages/MapPage'
import Dashboard from './pages/Dashboard'

// const Home = Loadable({
//   loader: () => import('./pages/MapPage'),
//   loading: Loading
// })

// const Dashboard = Loadable({
//   loader: () => import('./pages/Dashboard'),
//   loading: Loading
// })

// const LogIn = Loadable({
//   loader: () => import('./pages/Login'),
//   loading: Loading
// })

// const PasswordReset = Loadable({
//   loader: () => import('./pages/PasswordReset'),
//   loading: Loading
// })

const App: FC = () => {
  return (
    <HashRouter>
      <authStatusContext.Provider value={authStatus}>
        <arcGisContext.Provider value={ArcGIS}>
          <Routes>

            <Route path={'/'} element={<ProtectedRoute />}>
              <Route path={'/'} element={<MapPage />} />
              <Route path={'/dashboard'} element={<Dashboard />} />
            </Route>

            <Route path={'/login'} element={<Login />} />
            <Route path={'/passwordreset'} element={<PasswordReset />} />
            {/* {
              routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.component} />

              ))
            } */}

            {/* route.protected
                  ? <Route key={i} path={route.path} element={<ProtectedRoute />}>
                    <Route path={route.path} element={<route.component routes={route.routes} />} />
                  </Route>
                  :

                <Route key={i} path={route.path} element={<route.component routes={route.routes} />} />

                <RouteWithSubRoutes key={i} {...route}/> */}

            {/* <Route path={'/'} element={<ProtectedRoute />}>
              <Route path={'/'} element={Home} />
              <Route path={'/dashboard'} element={Dashboard} />
              <Route path={'/loading'} element={Loading} />
            </Route> */}
            {/* <Route path={'/login'} element={<p>asd</p>} />
            <Route path={'/passwordreset'} element={PasswordReset} /> */}

          </Routes>
        </arcGisContext.Provider>
      </authStatusContext.Provider>
    </HashRouter>
  )
}

export default App
