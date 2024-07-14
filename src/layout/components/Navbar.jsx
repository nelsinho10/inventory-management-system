export const Navbar = () => {
  return (
    <nav className="navbar fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-slate-800 dark:border-slate-700">
      <div className="navbar__container px-3 py-3 lg:px-5 lg:pl-3">
        <div className="navbar__inner flex items-center justify-between">
          <div className="navbar__left flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="navbar__toggle-btn inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
            </button>
            <a href="#" className="navbar__brand flex ms-2 md:me-24">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="navbar__logo h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="navbar__brand-name self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              StockyApp
              </span>
            </a>
          </div>
          <div className="navbar__right flex items-center">
            <div className="navbar__profile flex items-center ms-3">
              <div className="navbar__profile-icon relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  className="absolute w-10 h-10 text-gray-400 -left-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
