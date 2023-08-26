import React from 'react'

import { Link } from 'react-router-dom';
const Menu = () => {
  return (
    <>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-user">
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#355184] md:bg-[#355184] border-gray-700">
                  <li>
                      <Link to="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent  md:p-0 md:text-blue-400" aria-current="page">Home</Link>
                  </li>
                  <li>
                      <Link to="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white border-gray-700">About</Link>
                  </li>
                  <li>
                      <Link to="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white border-gray-700">Services</Link>
                  </li>
                  <li>
                      <Link to="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white border-gray-700">Pricing</Link>
                  </li>
                  <li>
                      <Link to="#" className="block py-2 pl-3 pr-4 rounded md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white border-gray-700">Contact</Link>
                  </li>
              </ul>
          </div>
    </>
  )
}

export default Menu