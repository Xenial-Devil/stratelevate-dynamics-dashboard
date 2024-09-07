import { useState } from 'react';
import SimpleGaugeChart from './components/Chart/SimpleGaugeChart';
import HorizontalBarChart from './components/Chart/HorizontalBarChart';
import ApexScatterChart from './components/Chart/ApexScatterChart';
import ApexBubbleChart from './components/Chart/ApexBubbleChart';

function DashboardApexCharts() {
  const [randomValue, setRandomValue] = useState(0);

  return (
    <>
      {<ApexScatterChart />}
     {<ApexBubbleChart />}
    </>
  );
}

export default DashboardApexCharts;
