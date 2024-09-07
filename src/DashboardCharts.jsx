import { useState } from 'react';
import SimpleGaugeChart from './components/Chart/SimpleGaugeChart';
import HorizontalBarChart from './components/Chart/HorizontalBarChart';
import ApexScatterChart from './components/Chart/ApexScatterChart';
import ApexBubbleChart from './components/Chart/ApexBubbleChart';
import AriaChart from './components/Chart/AriaChart';
import MultiPurposeTable from './components/Table/MultiPurposeTable';
import Data from './Data/mok.json';


function DashboardCharts() {
  const [randomValue, setRandomValue] = useState(0);

  return (
    <>
      <SimpleGaugeChart value={randomValue} />
{/*       {<HorizontalBarChart />} */}

      {<AriaChart />}
{/*       {<MultiPurposeTable data={Data}/>} */}
    </>

  );
}

export default DashboardCharts;
