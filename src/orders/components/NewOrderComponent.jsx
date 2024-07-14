import PropTypes from 'prop-types'

export const NewOrderComponent = ({ handleShowModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Nuevo Pedido
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => handleShowModal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <div>
              <label
                htmlFor="default"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo de pedido
              </label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un tipo de pedido</option>
                <option value="1">Pedido de compra</option>
                <option value="2">Pedido de venta</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="default"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Proveedor
              </label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un proveedor</option>
                <option value="1">Amazon</option>
                <option value="2">Mercado Libre</option>
                <option value="3">Walmart</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="default"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Categoria
              </label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona una categoria</option>
                <option value="1">Electronica</option>
                <option value="2">Ropa</option>
                <option value="3">Hogar</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="default"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Producto
              </label>
              <select
                id="default"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un producto</option>
                <option value="1">Laptop</option>
                <option value="2">Camisa</option>
                <option value="3">Mesa</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="default"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cantidad
              </label>
              <input
                id="default"
                type="number"
                placeholder="Ingresa la cantidad"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="default"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Precio
              </label>
              <input
                id="default"
                placeholder="Ingresa el precio"
                type="number"
                className="bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Crear Pedido
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

NewOrderComponent.propTypes = {
  handleShowModal: PropTypes.func.isRequired
}
