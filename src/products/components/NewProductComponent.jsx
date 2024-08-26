import PropTypes from 'prop-types'
import { useState } from 'react'
import { BASE_URL_SEARCH } from '../../shared/constanst/base-url.const'

export const NewProductComponent = ({ handleShowModal, updateProductsList }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    category: '',
    brand: '',
    model: '',
    supplier: '',
    price: 0,
    stock: 0
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
    const {
      name,
      description,
      category,
      brand,
      model,
      supplier,
      price,
      stock
    } = formValues

    if (
      !name ||
      !description ||
      !category ||
      !brand ||
      !model ||
      !supplier ||
      !price ||
      !stock
    ) {
      return
    }

    // // Save order in database
    fetch(`${BASE_URL_SEARCH}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        updateProductsList()
        handleShowModal(false)
        resetForm()
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const resetForm = () => {
    setFormValues({
      name: '',
      description: '',
      category: '',
      brand: '',
      model: '',
      supplier: '',
      price: 0,
      stock: 0
    })
  }

  return (
    <div className="new-order fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="new-order__container relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="new-order__header flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-100">
          <h3 className="new-order__title text-xl font-semibold text-gray-900 dark:text-white">
            Nuevo Producto
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
                htmlFor="name"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="description"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Descripción
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="category"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Categoría
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formValues.category}
                onChange={handleChange}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="brand"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Marca
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={formValues.brand}
                onChange={handleChange}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="model"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Modelo
              </label>
              <input
                type="text"
                id="model"
                name="model"
                value={formValues.model}
                onChange={handleChange}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-order__form-group">
              <label
                htmlFor="supplier"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Proveedor
              </label>
              <input
                type="text"
                id="supplier"
                name="supplier"
                value={formValues.supplier}
                onChange={handleChange}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="new-order__form-group">
              <label
                htmlFor="price"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Precio
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formValues.price}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault()
                  }
                }}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="new-order__form-group">
              <label
                htmlFor="stock"
                className="new-order__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Stock
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formValues.stock}
                onChange={handleChange}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                    e.preventDefault()
                  }
                }}
                className="new-order__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            <div className="new-order__form-group">
              <button
                type="submit"
                className="new-order__submit-btn w-full py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

NewProductComponent.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  updateProductsList: PropTypes.func.isRequired
}
