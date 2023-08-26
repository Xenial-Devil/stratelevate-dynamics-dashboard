import React from 'react'
import UserControll from './components/UserControll';
import ThemeToggler from './components/ThemeToggler';
import Notification from './components/Notification';
const Navbar = ({ navbar }) => {
    return (
        <nav className="fixed top-0 right-0 w-full h-16 border-gray-200 bg-[#2F3132] shadow-md z-20" style={navbar}>
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-end mx-auto p-4">
                <button data-drawer-target="main_sidebar" data-drawer-toggle="main_sidebar" aria-controls="main_sidebar" type="button" className=" left-4 top-0 absolute z-50 inline-flex items-center p-2 mt-2 ml-4 text-sm  sm:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-[#72B4DB] focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-6 h-6" aria-hidden={true} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <div className="flex items-center mx-2 md:order-4">
                    <UserControll />
                </div>
                <div className="flex items-center mx-2 md:order-3">
                    <ThemeToggler />
                </div>
                <div className="flex items-center mx-2 md:order-2">
                    <Notification />
                </div>
            </div>
        </nav>

    )
}

export default Navbar