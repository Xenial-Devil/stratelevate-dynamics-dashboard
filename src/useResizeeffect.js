import { useState } from "react";

const useResizeeffect = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const [Width, setWidth] = useState(12.0);
    const [phoneWidth, setphoneWidth] = useState(12.0);
    const [mainLeft, setmainLeft] = useState(12.0);
    const [mainrotate, setmainrotate] = useState(false);
    const [dynamicTitle, setDynamicTitle] = useState("Default Title");
    const [secoundaryWidth, setSecoundaryWidth] = useState(0);
    const [display, setDisplay] = useState("none");
    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    const handleMainResize = (size) => {
        setmainLeft(size);
    }
    const menucollups = () => {
        if (Width === 12.0) {
            if (windowSize.width >= 640) {
                setWidth(4.0);
                setphoneWidth(4.0);
                console.log(secoundaryWidth);
                if (secoundaryWidth === 0) {
                    handleMainResize(4.0);
                }
                else {
                    handleMainResize(16.0);
                }
            }
            else {
                setWidth(4.3);
                if (secoundaryWidth === 0) {
                    handleMainResize(4.3);
                }
                else {
                    handleMainResize(16.0);
                }
            }
            setmainrotate(true);
        } else if (Width === 4.0 || Width === 4.3) {
            setWidth(12.0);
            setphoneWidth(12.0);
            if (secoundaryWidth === 0) {
                handleMainResize(12.0);
            }
            else {
                handleMainResize(16.0);
            }
            setmainrotate(false);
        }
    };
    const submenucollups = () => {
        setSecoundaryWidth(0);
            handleMainResize(Width);
        setDisplay("none");

    }
    const submenuexpand = () => {
        setSecoundaryWidth(16.0);
        handleMainResize(16.0);
        setDisplay("block");
    };
    const updateTitle = (title) => {
        setDynamicTitle(title);
    }
    return { Width, phoneWidth, mainLeft, mainrotate, windowSize, dynamicTitle, secoundaryWidth, display, handleResize, menucollups, submenucollups, submenuexpand, updateTitle, handleMainResize }
}
export default useResizeeffect;