import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import RegisterLayout from './layouts/RegisterLayout'
import Register from './pages/Register'
import Login from './pages/Login'
export default function useRouteElements() {
  let routeElements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: 'login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    }
  ])
  return routeElements
}
