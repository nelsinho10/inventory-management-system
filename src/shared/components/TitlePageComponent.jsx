import PropTypes from 'prop-types'

export const TitlePageComponent = ({
  titleName,
  buttonTitle,
  handleShowModal
}) => {
  return (
    <div
      className={`flex justify-between p-3 max-w-full dark:bg-gray-700 dark:border-gray-700 rounded-lg `}
    >
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {titleName}
      </h1>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => handleShowModal(true)}
      >
        {buttonTitle}
      </button>
    </div>
  )
}

TitlePageComponent.propTypes = {
  titleName: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func
}
