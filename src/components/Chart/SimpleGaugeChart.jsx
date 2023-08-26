import GaugeComponent from 'react-gauge-component'
import React from 'react'

const SimpleGaugeChart = ({ value }) => {    
    return (
        <>
            <div className='!w-72 h-72 flex-wrap overflow-hidden bg-white rounded-xl flex flex-col justify-center items-center drop-shadow-xl dark:bg-[#434343]'>
                <h2 className='text-3xl mb-6 dark:text-white'>Title</h2>
                <GaugeComponent id="gauge-component"
                    type='semicircle'
                    arc={{
                        width: .3,
                        cornerRadius: 1,
                        padding: 0,
                        markLabel: {
                            type: "inner",
                        },
                        subArcs: [
                            {
                                limit: 25,
                                color: '#ff4560d9',
                                showMark: true,
                                tooltip: {
                                    text: '20%'
                                }
                            },
                            {
                                limit: 50,
                                color: '#feb019d9',
                                showMark: true,
                                tooltip: {
                                    text: '40%'
                                }
                            },
                            {
                                limit: 75,
                                color: '#008ffbd9',
                                showMark: true,
                                tooltip: {
                                    text: '60%'
                                }
                            },
                            {
                                limit: 100,
                                color: '#00f496d9',
                                showMark: true,
                                tooltip: {
                                    text: '100%'
                                }
                            },
                        ]
                    }} value={90}
                    minValue={0}
                    maxValue={100}
                    pointer={{ type: "arrow", elastic: true }}
                /></div>
        </>
    )
}

export default SimpleGaugeChart