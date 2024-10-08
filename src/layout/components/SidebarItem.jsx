import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export const SidebarItem = ({ title, iconSvg }) => {
  return (
    <li>
      <NavLink
        to={`/${title.toLowerCase()}`}
        // className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        className={({ isActive }) =>
          isActive
            ? 'sidebar-item__link sidebar-item__link--active flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700 group'
            : 'sidebar-item__link flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
        }
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
        <span className="sidebar-item__title flex-1 ms-3 whitespace-nowrap">{title}</span>
      </NavLink>
    </li>
  )
}

SidebarItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconSvg: PropTypes.string.isRequired
}
