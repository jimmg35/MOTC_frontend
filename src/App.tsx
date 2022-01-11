import React, { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'

const App: FC = () => {
  return (
    <HashRouter>
      <Routes>
        {
          routes.map((route, i) =>
            (
              <Route key={i} path={route.path} element={<route.component routes={route.routes}/>}/>
              // <RouteWithSubRoutes key={i} {...route}/>
            ))
        }
      </Routes>
    </HashRouter>
  )
}

export default App
