import React from 'react'
import Divider from '@mui/material/Divider';

const MeasureUpdaters = () => {
    return (
        <section className='bg-white dark:bg-[#434343] rounded-lg'>
            <div className="py-8 px-4 mx-auto max-w-6xl">
                <form action="#">
                    <div className="grid grid-cols-3 mb-1">
                        <h4 className='text-gray-900 dark:text-white text-lg col-span-2 uppercase'>Updaters</h4>
                        <h4 className='text-gray-900 dark:text-white text-lg col-span-1 uppercase'>Update Thresholds</h4>
                        <Divider className='col-span-3 border-b-gray-600 dark:border-b-gray-300' />
                    </div>
                    <div className="grid gap-4 mt-3">
                        <div className="text-gray-600 dark:text-gray-400">
                            Add Updater
                        </div>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default MeasureUpdaters