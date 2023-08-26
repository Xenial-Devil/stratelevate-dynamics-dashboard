import { useState, useRef } from "react";
import nightimg from '../img/night_Theme.png';
import dayimg from '../img/day_Theme.png';
import logo_dark from '../img/Dark.svg';
import logo_lite from '../img/Light.svg';

const useImageEffect = () => {
    const [isNightMode, setNightMode] = useState(false);
    const [tooltip, setTooltip] = useState((isNightMode) ? "Lite Mode" : "Dark Mode");
    const image = useRef((isNightMode) ? dayimg : nightimg);
    const logo = useRef((isNightMode) ? logo_lite : logo_dark);
    const toggle = () => {
        const newNightMode = !isNightMode;
        localStorage.setItem('darkMode', JSON.stringify(newNightMode));
        setNightMode(newNightMode);
        if (newNightMode) {
            document.documentElement.classList.add('dark');
            image.current = dayimg;
            logo.current = logo_dark;
            setTooltip("Lite Mode")
        } else {
            document.documentElement.classList.remove('dark');
            image.current = nightimg;
            logo.current = logo_lite;
            setTooltip("Dark Mode")
        }
    }
    const editToottip = (bool) => {
        setTooltip((bool) ? "Lite Mode" : "Dark Mode");
    }
    return { isNightMode, toggle, image, tooltip, dayimg, nightimg, editToottip, logo }
}

export default useImageEffect