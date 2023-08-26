import React, { useEffect } from 'react'
import Icon from '../components/icon';
import useImageEffect from '../components/useImageEffect';
import logo_dark from '../img/Dark.svg';
import logo_lite from '../img/Light.svg';
import { Link } from 'react-router-dom';
const Login = () => {
    const { logo, toggle } = useImageEffect();
    const [type, setType] = React.useState('password');
    const [show, setShow] = React.useState('mdi:eye-off-outline');
    const handleClick = () => {
        if(type === 'password'){
            let newType = 'text';
            let newShow = 'mdi:eye-outline';
            setType(newType);
            setShow(newShow);
        }
        else{   
            let newType = 'password';
            let newShow = 'mdi:eye-off-outline';
            setType(newType);
            setShow(newShow);
        }
    }
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        const newNightMode = JSON.parse(storedDarkMode);
        if (newNightMode) {
            logo.current = logo_dark;
        }
        else {
            logo.current = logo_lite;
        }
    }, [logo, toggle]);

    return (
        <>
            <div className="flex relative bg-[#bac2c8] dark:bg-[#202020] items-center justify-center my-12">
                <div className="flex max-w-[26rem] relative justify-center items-center z-10 authentication-basic">
                    <div className=" rounded-lg bg-white dark:bg-[#434343] py-4 px-4">
                        {/* <!-- Login --> */}
                        <div className="relative flex flex-col min-w-0 justify-center items-center rounded break-words bg-white dark:bg-[#434343]">
                            <div className="flex-auto p-6 min-w-[25rem]">
                                {/* <!-- Logo --> */}
                                <div className="flex overflow-hidden leading-4 items-center justify-center mb-4 mt-2">
                                    <Link to="#" className="app-brand-link flex items-center gap-2">
                                        <span className="app-brand-logo demo">
                                            <img src={logo.current} alt="Main Logo" srcset="" />
                                        </span>
                                    </Link>
                                </div>
                                {/* <!-- /Logo --> */}
                                <h4 className="text-2xl flex flex-col justify-center items-center font-bold text-black dark:text-white mb-1 pt-2">Welcome to<br/> <span className=' uppercase text-[#00FFE6]'>Stratelevate dynamics</span></h4>
                                <p className="mb-4 text-gray-500">Please sign-in to your account and start the adventure</p>

                                <form id="formAuthentication" className="mb-3" action="#" method="POST">
                                    <div className="mb-3 relative">
                                        <label for="email" className="mb-1 text-sm text-slate-700 dark:text-slate-200 ">Email or Username</label>
                                        <input
                                            type="text"
                                            className="block w-full px-1 py-2 text-gray-800 dark:text-gray-400 bg-gray-200 dark:bg-[#434343] border border-1 rounded-md border-gray-500"
                                            id="email"
                                            name="email-username"
                                            placeholder="Enter your email or username"
                                            autofocus />
                                        <div id='emailerror' class="block text-[#ea5455]"></div>
                                    </div>
                                    <div className="mb-3 form-password-toggle">
                                        <div className="flex justify-between">
                                            <label className="mb-1 text-sm text-slate-700 dark:text-slate-200 " for="password">Password</label>
                                            <Link to="#" className=' text-blue-600 dark:text-[#7367f0] text-sm'>
                                                <small>Forgot Password?</small>
                                            </Link>
                                        </div>
                                        <div className="relative flex items-stretch w-full  text-gray-800 dark:text-gray-400 dark:bg-[#434343] border border-1 rounded-md border-gray-500">
                                            <input
                                                type={type}
                                                id="password"
                                                className="text-gray-800  dark:text-gray-400 bg-gray-200 dark:bg-[#434343] w-full border-none border-l rounded-md outline-none focus:ring-2 pr-8"
                                                name="password"
                                                placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                                aria-describedby="password" />
                                            <span className=" absolute flex items-center justify-center cursor-pointer right-1 top-2" onClick={handleClick}><Icon icon={show} /></span>
                                        </div>
                                        <div id='passerror' class="block text-[#ea5455]"></div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="block min-h-[1.378125rem] mb-0.5 pl-[1.7em];">
                                            <input className="form-checkbox-input  rounded-[0.25em] float-left mr-[1.2em] w-[1.2em] h-[1.2em] align-top bg-transparent bg-gray-200 dark:bg-[#434343] bg-no-repeat bg-center bg-contain border appearance-none mt-[0.135em] border-solid border-[#8692d0]" type="checkbox" id="remember-me" />
                                            <label className="form-checkbox-label text-gray-700 dark:text-[#AEBEE3]" for="remember-me"> Remember Me </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button className="shadow-[0px_2px_4px_rgba(15,20,34,0.4)] cursor-pointer text-white bg-[#7367f0] border-[#7367f0] w-full inline-flex items-center justify-center transition-all duration-[0.135s] ease-[ease-in-out] tracking-[0.43px] scale-[1.001] h-10 rounded-lg" type="submit">Sign in</button>
                                    </div>
                                </form>

                                <p className="text-center">
                                    <span className='dark:text-gray-100'>New on our platform?</span>
                                    <Link to="#" className="text-[#7367f0]">
                                        <span className='ml-2'>Create an account</span>
                                    </Link>
                                </p>

                                <div className="divider block text-center overflow-hidden whitespace-nowrap mx-0 my-4 dark:text-gray-300">
                                    <div className="divider-text relative text-gray-600 dark:text-gray-400 inline-block text-[0.8rem] px-4 py-0">or</div>
                                </div>

                                <div className="flex justify-center">
                                    <Link to="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-md py-1 px-2 leading-normal no-underline btn-icon btn-label-facebook me-3 bg-[#313956] outline-none border-transparent">
                                        <Icon icon="line-md:facebook" color='#205bd7' className="text-[#3b5998] " />
                                    </Link>

                                    <Link to="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-md py-1 px-2 leading-normal no-underline btn-icon btn-label-facebook me-3 bg-[#4b3746] outline-none border-transparent">
                                        <Icon icon="ri:google-fill" color='#dd4b39' />
                                    </Link>

                                    <Link to="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded-md py-1 px-2 leading-normal no-underline btn-icon btn-label-facebook me-3 bg-[#2c4564] outline-none border-transparent">
                                        <Icon icon="devicon:twitter" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- /Register --> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login