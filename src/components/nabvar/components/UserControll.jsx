import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../../../img/profile.jpg';
const UserControll = () => {
  return (
      <><button type="button" className="flex mr-3 text-sm bg-[#355184] rounded-full md:mr-0 focus:ring-4 
       focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src={profile} alt="user" />
      </button>
          <div className="z-50 hidden my-4 text-base list-none divide-y rounded-lg shadow bg-[#1C1C1C] divide-gray-600" id="user-dropdown">
              <div className="px-4 py-3">
                  <span className="block text-sm text-white">Subroto Saha</span>
                  <span className="block text-sm  truncate text-gray-400">subroto@beri.com.bd</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                      <Link to="#" className="block px-4 py-2 text-sm hover:bg-[#2e2e2e] text-gray-200 hover:text-white">Dashboard</Link>
                  </li>
                  <li>
                      <Link to="#" className="block px-4 py-2 text-sm hover:bg-[#2e2e2e] text-gray-200 hover:text-white">Settings</Link>
                  </li>
                  <li>
                      <Link to="#" className="block px-4 py-2 text-sm hover:bg-[#2e2e2e] text-gray-200 hover:text-white">Earnings</Link>
                  </li>
                  <li>
                      <Link to="#" className="block px-4 py-2 text-sm hover:bg-[#2e2e2e] text-gray-200 hover:text-white">Sign out</Link>
                  </li>
              </ul>
          </div></>
  )
}

export default UserControll