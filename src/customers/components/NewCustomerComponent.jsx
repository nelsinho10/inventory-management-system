import PropTypes from 'prop-types'
import { useState } from 'react'
import { BASE_URL_OPERATOR } from '../../shared/constanst/base-url.const'

export const NewCustomerComponent = ({ handleShowModal, updateCustomersList }) => {
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
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
    const { name, address, phone, email } = formValues

    if (!name || !address || !phone || !email) {
      return
    }

    // Save customer in database
    fetch(`${BASE_URL_OPERATOR}/customers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
        updateCustomersList()
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
      address: '',
      phone: '',
      email: ''
    })
  }

  return (
    <div className="new-customer fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="new-customer__container relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-800">
        <div className="new-customer__header flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-100">
          <h3 className="new-customer__title text-xl font-semibold text-gray-900 dark:text-white">
            Nuevo Cliente
          </h3>
          <button
            type="button"
            className="new-customer__close-btn text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
        <div className="new-customer__body p-4 md:p-5">
          <form className="new-customer__form space-y-4" onSubmit={handleSubmit}>
            <div className="new-customer__form-group">
              <label
                htmlFor="name"
                className="new-customer__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="new-customer__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-customer__form-group">
              <label
                htmlFor="address"
                className="new-customer__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Dirección
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formValues.address}
                onChange={handleChange}
                className="new-customer__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-customer__form-group">
              <label
                htmlFor="phone"
                className="new-customer__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Teléfono
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className="new-customer__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-customer__form-group">
              <label
                htmlFor="email"
                className="new-customer__form-label block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="new-customer__form-input block w-full mt-1 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="new-customer__form-group">
              <button
                type="submit"
                className="new-customer__submit-btn w-full py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
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

NewCustomerComponent.propTypes = {
  handleShowModal: PropTypes.func.isRequired,
  updateCustomersList: PropTypes.func.isRequired
}