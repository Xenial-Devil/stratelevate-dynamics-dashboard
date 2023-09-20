import React, { useEffect, useState } from 'react';
import SubSidtbar from './SubSidtbar';
import { Link } from 'react-router-dom';
import useImageEffect from '../useImageEffect';
//import $ from 'jquery';
const Sidebar = ({ Width, mainrotate, windowSize, dynamicTitle, secoundaryWidth, display, handleResize, menucollups, submenucollups, submenuexpand, updateTitle }) => {
    const { logo } = useImageEffect();
    const dir = document.documentElement.getAttribute('dir');
    const maincollaps = [dir === 'ltr' ? (mainrotate) ? 'rotate-180' : 'rotate-0' : (mainrotate) ? 'rotate-0' : 'rotate-180'];
    const mainsidebar = `fixed top-0 ${dir == 'ltr' ? 'left-0' : 'right-0'} z-40 h-screen -translate-x-full text-sm !transition-all !duration-500 !ease sm:translate-x-0 z-50`;
    const secondarySidebar = `fixed text-xs border-l top-0 ${dir == 'ltr' ? 'left-0' : 'right-0'}z-40 w-64 h-screen -translate-x-full !transition-all !duration-500 !ease sm:translate-x-0 border-gray-300 border-[#1C1C1C] z-50`;
    const collups = `flex w-5 h-5 transition duration-75 text-gray-400 :group-hover:text-white cursor-pointer ${maincollaps}`;
    const [sideNotification, setsideNotification] = useState(false);
    const secondarySidebarStyles = {
        display: `${display}`,
        width: `${secoundaryWidth}rem`,
        [dir === 'ltr' ? 'left' : 'right']: windowSize.width >= 640 ? '' : '16rem',
    };
    const hidenotification = () => {
        setsideNotification(true);
    }
    const mainfooterresize = {
        width: `${Width}rem`,
    };
    const mainSidebarStyles = {
        width: `${Width}rem`,
    };
    const mainfootericon = (Width === 12.0) ? `flex flex-1 justify-between items-center` : "hidden";
    const logostyle = (Width === 12.0) ? ' w-full h-12' : 'w-full h-8';
    const displaysideNotification = (sideNotification) ? 'hidden' : '';
    const Notification = (Width === 12.0) ? `p-4 mt-6 rounded-lg bg-[#0e0e0e] ${displaysideNotification}` : 'hidden';
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        updateTitle("Dashboard");
        document.title = dynamicTitle;
        const activelink = document.querySelectorAll('#main_sidebar ul li');
        activelink.forEach((item) => {
            item.addEventListener('click', () => {
                activelink.forEach((link) => link.classList.remove('activemenu'));
                item.classList.add('activemenu');
            });
        });
        const sidebaractivelink = document.querySelectorAll('#sub_sidebar ul li');
        function findActiveUl(item) {
            const ul = item.querySelector('ul');
            if (ul) {
                return findActiveUl(ul);
            } else {
                return item;
            }
        }
        sidebaractivelink.forEach((item) => {
            item.addEventListener('click', () => {
                const removeactive = document.querySelectorAll('.activesub');
                const activeUl = findActiveUl(item);
                const activeLink = activeUl.querySelectorAll('li');
                activeLink.forEach((item) => {
                    item.addEventListener('click', () => {
                        activeLink.forEach((link) => link.classList.remove('activesub'));
                        removeactive.forEach((link) => link.classList.remove('activesub'));
                        item.classList.add('activesub');
                    });
                });
            });
        });
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [dynamicTitle, handleResize, updateTitle]);

    return (
        <>
            <button data-drawer-target="main_sidebar" data-drawer-toggle="main_sidebar" aria-controls="main_sidebar" type="button" className=" z-50 inline-flex items-center p-2 mt-2 ml-4 text-sm  sm:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-[#202020] focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden={true} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <aside id="main_sidebar" style={mainSidebarStyles} className={mainsidebar} aria-label="Sidebar">
                <header className={`sm:w-full items-center p-2 h-16 fixed left-0 top-0 !bg-[#2F3132] text-white border-b ${dir == 'ltr' ? 'border-r' : 'border-l'} border-[#1C1C1C]`}>
                    <div id="companylogo" >
                        <img src={logo.current} alt="logo" className={logostyle} srcSet="" />
                    </div>
                </header>
                <div className="h-full min-h-screen px-3 pt-16 py-4 !pb-16 overflow-y-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded scrollbar-track:!bg-slate-500/[0.16] scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2 bg-[#2F3132]">
                    <ul className="space-y-2 font-medium">
                        <li>
                            <Link to="#" className="flex items-center p-2  text-white  hover:bg-[#202020] group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 600 600"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                <span className="flex-1 ml-4 whitespace-nowrap">Home</span>
                            </Link>

                        </li>
                        <li className='activemenu activemenu'>
                            <Link to="#" className="flex items-center p-2 text-white hover:bg-[#202020] group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 600 600"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" /></svg>
                                <span className="flex-1 ml-4 whitespace-nowrap">Bookmark</span>
                            </Link>

                        </li>
                    </ul>

                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-[#1C1C1C]">
                        <li>
                            <Link to="#" className="flex items-center p-2 transition duration-75 hover:bg-[#202020] text-white group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 600 600"><path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" /></svg>
                                <span className="ml-4">Briefings</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className="flex items-center p-2 transition duration-75 hover:bg-[#202020] text-white group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 600 600"><path d="M0 224.2C0 100.6 100.2 0 224 0h24c95.2 0 181.2 69.3 197.3 160.2c2.3 13 6.8 25.7 15.1 36l42 52.6c6.2 7.8 9.6 17.4 9.6 27.4c0 24.2-19.6 43.8-43.8 43.8H448v64c0 35.3-28.7 64-64 64H320v32c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V407.3c0-16.7-6.9-32.5-17.1-45.8C16.6 322.4 0 274.1 0 224.2zM224 64c-8.8 0-16 7.2-16 16c0 33-39.9 49.5-63.2 26.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6C145.5 152.1 129 192 96 192c-8.8 0-16 7.2-16 16s7.2 16 16 16c33 0 49.5 39.9 26.2 63.2c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0C168.1 286.5 208 303 208 336c0 8.8 7.2 16 16 16s16-7.2 16-16c0-33 39.9-49.5 63.2-26.2c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6C302.5 263.9 319 224 352 224c8.8 0 16-7.2 16-16s-7.2-16-16-16c-33 0-49.5-39.9-26.2-63.2c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0C279.9 129.5 240 113 240 80c0-8.8-7.2-16-16-16zm-24 96a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm40 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" /></svg>
                                <span className="ml-4">Strategy map</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2  text-white hover:bg-[#202020] group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M13 2.051V11h8.949c-.47-4.717-4.232-8.479-8.949-8.949zm4.969 17.953c2.189-1.637 3.694-4.14 3.98-7.004h-8.183l4.203 7.004z"></path><path d="M11 12V2.051C5.954 2.555 2 6.824 2 12c0 5.514 4.486 10 10 10a9.93 9.93 0 0 0 4.255-.964s-5.253-8.915-5.254-9.031A.02.02 0 0 0 11 12z"></path>
                                </svg>
                                <span className="ml-4">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2 transition duration-75  hover:bg-[#202020] text-white group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 600 600"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" /></svg>
                                <span className="ml-4">Reports</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2 transition duration-75  hover:bg-[#202020] text-white group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 600 600"><path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z" /></svg>
                                <span className="ml-4">Charts</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-[#1C1C1C]">
                        <li>
                            <Link to="#" className="flex items-center p-2 transition duration-75  hover:bg-[#202020] text-white group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 600 600"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 64v64H64V96h88zm56 0h88v64H208V96zm240 0v64H360V96h88zM64 224h88v64H64V224zm232 0v64H208V224h88zm64 0h88v64H360V224zM152 352v64H64V352h88zm56 0h88v64H208V352zm240 0v64H360V352h88z" /></svg>
                                <span className="ml-4">Scorecards</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="#" className="flex items-center p-2 transition duration-75  hover:bg-[#202020] text-white group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 600 600"><path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                                <span className="ml-4">initiatives</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center p-2  text-white hover:bg-[#202020] group" onClick={submenuexpand}>
                                <svg className={`flex-shrink-0 w-5 h-5 ${dir === 'ltr' ? 'mr-2' : 'ml-6'} transition duration-75 text-gray-400 group-hover:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="1em" viewBox="0 0 600 600"><path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" /></svg>
                                <span className="ml-4">Files</span>
                            </Link>
                        </li>
                    </ul>
                    <div id="dropdown-cta" className={Notification} role="alert">
                        <div className="flex items-center mb-3">
                            <span className="  text-sm font-semibold mr-2 px-2.5 py-0.5 rounded bg-orange-200 text-orange-900">Notification</span>
                            <button type="button" className="ml-auto -mx-1.5 -my-1.5 inline-flex justify-center items-center w-6 h-6 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 bg-[#0e0e0e] text-[#7e7e7e] hover:bg-[#1e1e1e]" data-dismiss-target="#dropdown-cta" aria-label="Close" onClick={hidenotification}>
                                <span className="sr-only">Close</span>
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path>
                                </svg>
                            </button>
                        </div>
                        <p className="mb-3 text-sm text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime vero magnam, deserunt ratione libero mollitia doloribus magni, cum, nihil accusantium! Excepturi ipsa rem facere harum explicabo non incidunt nemo.
                        </p>
                    </div>
                </div>
                <footer className="w-full h-12 fixed clear-both left-0 bottom-0 flex justify-between items-center text-white text-2xl py-2 px-3 border-r-[6px] border-r-slate-500/[0.16]  bg-[#1e1e1e] !transition-all !duration-500 !ease" style={mainfooterresize}>
                    <div className={mainfootericon}>
                        <svg xmlns="http://www.w3.org/2000/svg" id='menu_search' viewBox="0 0 24 24" className="flex w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white cursor-pointer" fill="currentColor"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" id='menu_setting' viewBox="0 0 24 24" className="flex w-5 h-5 transition duration-75 text-gray-400 group-hover:text-white cursor-pointer" fill="currentColor"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" /></svg>

                    </div>

                    <div className='flex flex-1 justify-end items-center'><svg xmlns="http://www.w3.org/2000/svg" id="Main_menu_collaps" onClick={menucollups} viewBox="0 0 24 24" className={collups} fill="currentColor"><path d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"></path></svg>

                    </div>
                </footer>
            </aside>
            <SubSidtbar
                secondarySidebarStyles={secondarySidebarStyles}
                secondarySidebar={secondarySidebar}
                submenucollups={submenucollups}
            />
        </>
    )
}

export default Sidebar