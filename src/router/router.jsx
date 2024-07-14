import { createBrowserRouter } from 'react-router-dom'
import { LayoutPage } from '../layout/pages/LayoutPage'
import { ProductsPage } from '../products/pages/ProductsPage'
import { OrdersPage } from '../orders/pages/OrdersPage'
import { Navigate } from 'react-router-dom'
import { SuppliersPage } from '../suppliers/pages/SuppliersPage'
import { CustomersPage } from '../customers/pages/CustomersPage'
import { AdminPage } from '../admin/pages/AdminPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/pedidos" />
      },
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
        element: <SuppliersPage />
      },
      {
        path: '/clientes',
        element: <CustomersPage />
      },
      {
        path: '/administracion',
        element: <AdminPage />
      }
    ]
  }
])
