import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import {
  BASE_URL_OPERATOR,
  BASE_URL_SEARCH
} from '../../shared/constanst/base-url.const'

export const NewOrderComponent = ({ handleShowModal, updateOrdersList }) => {
  const [formValues, setFormValues] = useState({
    type: 'compra',
    customerId: '',
    status: 1,
    products: []
  })
  const [products, setProducts] = useState([])
  const [customers, setCustomers] = useState([])
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedQuantity, setSelectedQuantity] = useState(0)
  const [selectedStock, setSelectedStock] = useState(0)

  useEffect(() => {
    // Fetch products
    fetch(`${BASE_URL_SEARCH}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))

    // Fetch customers
    fetch(`${BASE_URL_OPERATOR}/customers`)
      .then((response) => response.json())
      .then((data) => setCustomers(data))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleProductSelection = () => {
    if (selectedProduct && selectedQuantity > 0) {
      setFormValues({
        ...formValues,
        products: [
          ...formValues.products,
          {
            productId: selectedProduct,
            quantity: selectedQuantity,
            stock: selectedStock
          }
        ]
      })
      setSelectedProduct('')
      setSelectedQuantity(0)
      setSelectedStock(0)
    }
  }

  const handleProductChange = (e) => {
    const productId = e.target.value
    setSelectedProduct(productId)
    const product = products.find((p) => p.id === productId)
    setSelectedStock(product ? product.stock : 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate form
    const { customerId, products } = formValues

    if (customerId === '' || products.length === 0) {
      return
    }

    // Prepare order data
    const orderData = {
      type: formValues.type,
      customerId: formValues.customerId,
      status: formValues.status,
      products: formValues.products.map((product) => ({
        productId: product.productId,
        quantity: product.stock - product.quantity
      }))
    }

    console.log('Order data:', orderData)

    // Send POST request to save order
    fetch(`${BASE_URL_OPERATOR}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        console.log('Order saved:', data)
        // Update orders list and close modal
        updateOrdersList()
        handleShowModal(false)
      })
      .catch((error) => {
        // Handle error
        updateOrdersList()
        handleShowModal(false)
        console.log('Error:', error)
        // console.error('There was a problem with the fetch operation:', error)
      })
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
                htmlFor="customerId"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cliente
              </label>
              <select
                id="customerId"
                name="customerId"
                value={formValues.customerId}
                onChange={handleChange}
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Selecciona un cliente</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.id} - {customer.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="productId"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Producto
              </label>
              <select
                id="productId"
                name="productId"
                value={selectedProduct}
                onChange={handleProductChange}
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Selecciona un producto</option>
                {products.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
              <label
                htmlFor="quantity"
                className="new-order__label block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Cantidad
              </label>
              <input
                id="quantity"
                name="quantity"
                value={selectedQuantity}
                onChange={(e) => setSelectedQuantity(e.target.value)}
                type="number"
                placeholder="Ingresa la cantidad"
                className="new-order__input bg-gray-50 border border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="new-order__stock-info text-sm text-gray-900 dark:text-white">
                Stock disponible: {selectedStock}
              </div>
              <button
                type="button"
                onClick={handleProductSelection}
                className="new-order__add-product-btn w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Añadir Producto
              </button>
            </div>
            <div className="new-order__selected-products">
              <h4 className="new-order__selected-products-title text-lg font-medium text-gray-900 dark:text-white">
                Productos Seleccionados
              </h4>
              <ul className="new-order__selected-products-list list-disc pl-5">
                {formValues.products.map((product, index) => (
                  <li
                    key={index}
                    className="new-order__selected-product-item text-sm text-gray-900 dark:text-white"
                  >
                    {products.find((p) => p.id === product.productId)?.name} -{' '}
                    {product.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <button
              type="submit"
              className="new-order__submit-btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmit}
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
  handleShowModal: PropTypes.func.isRequired,
  updateOrdersList: PropTypes.func.isRequired
}