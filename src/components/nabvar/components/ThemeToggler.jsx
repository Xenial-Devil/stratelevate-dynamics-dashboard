import React, { useEffect } from 'react'
import useImageEffect from '../../useImageEffect';
const ThemeToggler = () => {
    const { toggle, image, tooltip, dayimg, nightimg, editToottip } = useImageEffect();
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        const newNightMode = JSON.parse(storedDarkMode);
        if (newNightMode) {
            document.documentElement.classList.add('dark');
            image.current = dayimg;
            editToottip(true)
        }
        else {
            document.documentElement.classList.remove('dark');
            image.current = nightimg;
            editToottip(false)
        }
    }, [tooltip]);
    return (
        <>

            <img data-tooltip-target="tooltip-dark" className="rounded-full w-8 h-8 cursor-pointer" src={image.current} alt="Theme Toggle" onClick={toggle} />
            <div id="tooltip-dark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium border  text-white border-[#1a1a1a] bg-[#1c1c1c] rounded-lg shadow-sm opacity-0 tooltip">
                {tooltip}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>

        </>
    )
}

export default ThemeToggler