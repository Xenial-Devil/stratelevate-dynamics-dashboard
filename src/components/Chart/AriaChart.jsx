import React from 'react'
import Chart from 'react-apexcharts';

const options = {
    chart: {
        height: 250,
        type: 'area',
        toolbar: {
            show: true,
        },
    },
    theme: {
        palette: 'palette1'
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    yaxis: {
        show: true,
    },
};

const series = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
}, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
}]

const AriaChart = () => {
    return (
        <div className='w-11/12 h-72 overflow-hidden bg-white rounded-xl flex flex-col justify-center items-center shadow-xl dark:bg-[#1F2937]'>
            <Chart
                options={options}
                series={series}
                width={900}
                height={240}
                type="area"
                tooltip={options.tooltip}
            />
        </div>
    );
}

export default AriaChart