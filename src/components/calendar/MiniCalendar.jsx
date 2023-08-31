import React from 'react'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import "./MiniCalendar.css"
const MiniCalendar = () => {
    return (
        <div className="flex justify-center">
            <Flatpickr options={{ minDate: "today", enableTime: true, inline: true, monthSelectorType: 'static' }} />
        </div>
    )
}

export default MiniCalendar