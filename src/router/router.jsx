import { createBrowserRouter } from 'react-router-dom'
import { LayoutPage } from '../layout/pages/LayoutPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/pedidos',
        element: <h1>Pedidos</h1>
      },
      {
        path: '/productos',
        element: <h1>Produtos</h1>
      },
      {
        path: '/proveedores',
        element: <h1>Proveedores</h1>
      },
      {
        path: '/clientes',
        element: <h1>Clientes</h1>
      },
      {
        path: '/administracion',
        element: <h1>Administración de usuarios</h1>
      }
    ]
  }
])
