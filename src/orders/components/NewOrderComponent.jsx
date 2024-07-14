import PropTypes from 'prop-types'
import { useState } from 'react'

export const NewOrderComponent = ({ handleShowModal }) => {
  const [formValues, setFormValues] = useState({
    orderType: '',
    supplier: '',
    category: '',
    product: '',
    quantity: 0,
    price: 0
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate form
    const { orderType, supplier, category, product, quantity, price } =
      formValues

    if (
      orderType === '' ||
      supplier === '' ||
      category === '' ||
      product === '' ||
      quantity === 0 ||
      price === 0
    ) {
      return
    }
    // Save order in local storage
    const orders = JSON.parse(localStorage.getItem('orders')) || []
    const newOrder = {
      id: orders.length + 1,
      orderType,
      supplier,
      category,
      product,
      quantity,
      price
    }
    orders.push(newOrder)
    localStorage.setItem('orders', JSON.stringify(orders))
    // Close modal
    handleShowModal(false)
  }

  return (
    <div className="new-order fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="new-order__container relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="new-order__header flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-100">
          <h3 className="new-order__title text-xl font-semibold text-gray-900 dark:text-white">
            Nuevo Pedido
          </h3>
          <button
            type="button"
            className="new-order__close-btn text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
        <div className="new-order__body p-4 md:p-5">
          <form className="new-order__form space-y-4" onSubmit={handleSubmit}>
            <div className="new-order__form-group">
              <label
                htmlFor="typeOrder"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo de pedido
              </label>
              <select
                id="typeOrder"
                name="orderType"
                value={formValues.orderType}
                onChange={handleChange}
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un tipo de pedido</option>
                <option value="compra">Pedido de compra</option>
                <option value="venta">Pedido de venta</option>
              </select>
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="supplier"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Proveedor
              </label>
              <select
                id="supplier"
                name="supplier"
                value={formValues.supplier}
                onChange={handleChange}
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un proveedor</option>
                <option value="amazon">Amazon</option>
                <option value="mercado-libre">Mercado Libre</option>
                <option value="walmart">Walmart</option>
              </select>
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="category"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Categoria
              </label>
              <select
                id="category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona una categoria</option>
                <option value="electronica">Electronica</option>
                <option value="ropa">Ropa</option>
                <option value="hogar">Hogar</option>
              </select>
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="product"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Producto
              </label>
              <select
                id="product"
                name="product"
                value={formValues.product}
                onChange={handleChange}
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Selecciona un producto</option>
                <option value="laptop">Laptop</option>
                <option value="camisa">Camisa</option>
                <option value="mesa">Mesa</option>
              </select>
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="quantity"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cantidad
              </label>
              <input
                id="quantity"
                name="quantity"
                value={formValues.quantity}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault()
                  }
                }}
                type="number"
                placeholder="Ingresa la cantidad"
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="price"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Precio
              </label>
              <input
                id="price"
                name="price"
                value={formValues.price}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault()
                  }
                }}
                placeholder="Ingresa el precio"
                type="number"
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="new-order__submit-btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
