import React, { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
import { arcGisContext } from './lib/MapProvider'
import ArcGIS from './lib/ArcGIS'
import ProtectedRoute from './routes/ProtectedRoute'

const App: FC = () => {
  return (
    <HashRouter>
      <arcGisContext.Provider value={ArcGIS}>
        <Routes>
          {
            routes.map((route, i) => (
              route.protected
                ? <Route key={i} path={route.path} element={<ProtectedRoute />}> <Route path={route.path} element={<route.component routes={route.routes} />} /> </Route>
                : <Route key={i} path={route.path} element={<route.component routes={route.routes} />} />
              // <RouteWithSubRoutes key={i} {...route}/>
            ))
          }

        </Routes>
      </arcGisContext.Provider>
    </HashRouter>
  )
}

export default App
