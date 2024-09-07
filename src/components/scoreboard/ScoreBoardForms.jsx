import React from 'react'
import CreateTypes from './components/CreateTypes'
import MeasureDetailsForm from './components/MeasureDetailsForm'
const ScoreBoardForms = () => {
    return (
        <div className='flex w-full flex-col gap-4'>
            <CreateTypes />
            <MeasureDetailsForm />
        </div>
    )
}

export default ScoreBoardForms