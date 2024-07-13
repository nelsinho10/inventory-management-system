import PropTypes from 'prop-types'

export const SidebarItem = ({ title, iconSvg }) => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d={iconSvg} />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
      </a>
    </li>
  )
}

SidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    iconSvg: PropTypes.string.isRequired
}