import { useState } from 'react'
import { TitlePageComponent } from '../../shared/components/TitlePageComponent'
import { useEffect } from 'react'
import { BASE_URL_OPERATOR } from '../../shared/constanst/base-url.const'

export const CustomersPage = () => {
  const [customerList, setCustomerList] = useState([])

  const getAllCustomers = () => {
    fetch(`${BASE_URL_OPERATOR}/customers`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        setCustomerList(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {
    getAllCustomers()
  }, [])

  return (
    <div className="customer-page">
      <TitlePageComponent titleName="Clientes" buttonTitle="Nuevo Cliente" />

      <div className="customer-page__search mt-10">
        <label
          htmlFor="table-search"
          className="customer-page__search-label sr-only"
        >
          Buscar
        </label>
        <div className="customer-page__search-input-wrapper relative">
          <div className="customer-page__search-icon absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="customer-page__search-input block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar..."
          />
        </div>
      </div>

      <div className="customer-page__table-container relative overflow-x-auto shadow-md sm:rounded-lg mt-2 rounded-lg">
        <table className="customer-page__table w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="customer-page__table-head text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="customer-page__table-header px-4 py-3">
                Id Cliente
              </th>
              <th scope="col" className="customer-page__table-header px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="customer-page__table-header px-6 py-3">
                Dirección
              </th>
              <th scope="col" className="customer-page__table-header px-6 py-3">
                Teléfono
              </th>
              <th scope="col" className="customer-page__table-header px-6 py-3">
                Correo
              </th>
              <th scope="col" className="customer-page__table-header px-6 py-3">
                Estado
              </th>
              <th scope="col" className="customer-page__table-header px-8 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {customerList.map((customer) => (
              <tr
                key={customer.id}
                className="customer-page__table-row bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="customer-page__table-cell px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {customer.id}
                </th>
                <td className="customer-page__table-cell px-6 py-4">
                  {customer.name}
                </td>
                <td className="customer-page__table-cell px-6 py-4">
                  {customer.address}
                </td>
                <td className="customer-page__table-cell px-6 py-4">
                  {customer.phone}
                </td>
                <td className="customer-page__table-cell px-6 py-4">
                  {customer.email}
                </td>

                <td className="customer-page__table-cell px-8 py-4">
                  {customer.status ? (
                    <span className="customer-page__status-completed inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-600 rounded-full">
                      Activo
                    </span>
                  ) : (
                    <span className="customer-page__status-pending inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-orange-600 rounded-full">
                      Inactivo
                    </span>
                  )}
                </td>
                <td className="customer-page__table-cell px-6 py-4">
                  <button
                    type="button"
                    className="customer-page__button-delete text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-normal rounded-md text-sm text-center inline-flex items-center me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                    <span className="sr-only">Eliminar</span>
                  </button>

                  <button
                    type="button"
                    className="customer-page__button-edit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded-md text-sm text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 3l6 6-9 9-6-6 9-9Z"
                      ></path>
                    </svg>
                    <span className="sr-only">Editar</span>
                  </button>

                  <button
                    type="button"
                    className="customer-page__button-complete text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-normal rounded-md text-sm text-center inline-flex items-center me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="sr-only">Completar</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
