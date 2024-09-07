import React from 'react';
import Chart from 'react-apexcharts';

const options = {
    chart: {
        toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: true,
                zoomout: true,
                pan: true,
                reset: true,
                customIcons: []
            },
        },
        height: 250,
        type: 'bar',
        offsetY: 16,
    },
    plotOptions: {
        bar: {
            distributed: true,
            horizontal: true,
            barHeight: '100%',
        },
    },
    theme: {
        palette: 'palette1'
    },
    dataLabels: {
        enabled: true,
    },
    xaxis: {
        min: 0,
        max: 100,
        position: 'bottom',
        categories: ['Jan', "Feb", "Mar", "Apr"],
        tickPlacement: 'on',
        tooltip: {
            enabled: false,
            formatter: function (val) {
                return val + "%"
            },
            offsetY: 0,
            style: {
                fontSize: 0,
                fontFamily: 0,
            },
        },
    },
    yaxis: {
        show: true,
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
    },
};

const series = [
    {
        data: [70, 55, 41, 67],
    },
];

const HorizontalBarChart = () => {
    return (
        <div className='w-11/12 h-72 overflow-hidden bg-white rounded-xl flex flex-col justify-center items-center shadow-xl dark:bg-[#434343]'>
            <Chart
                options={options}
                series={series}
                type="bar"
                width={900}
                height={240}
                tooltip={options.xaxis.tooltip}
            />
        </div>
    );
};

export default HorizontalBarChart;
