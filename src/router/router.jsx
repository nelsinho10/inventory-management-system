import { createBrowserRouter } from 'react-router-dom'
import { LayoutPage } from '../layout/pages/LayoutPage'
import { ProductsPage } from '../products/pages/ProductsPage'
import { OrdersPage } from '../orders/pages/OrdersPage'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/pedidos',
        element: <OrdersPage />
      },
      {
        path: '/productos',
        element: <ProductsPage />
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
