import React, { FC } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import routes from './routes'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import Dashboard from './pages/Dashboard'

// routes.forEach((route, i) => {
//   console.log(i)
//   console.log(route.path)
//   console.log(route.routes)
//   console.log('=============')
// })

// const darkTheme = createTheme({
//   palette: {
//     mode: 'light'
//   }
// })

// console.log(darkTheme)

const App: FC = () => {
  return (
    // <ThemeProvider theme={darkTheme}>
    <HashRouter>
      <Routes>
        {
          routes.map((route, i) => (
            <Route key={i} path={route.path} element={<route.component routes={route.routes} />} />
            // <RouteWithSubRoutes key={i} {...route}/>
          ))
        }
      </Routes>
    </HashRouter>
    // </ThemeProvider>

  )
}

export default App
