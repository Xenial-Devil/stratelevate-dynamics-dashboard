import './App.css';
import './css/fonts.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar/sidebar';
import SimpleGaugeChart from './components/Chart/SimpleGaugeChart';
import HorizontalBarChart from './components/Chart/HorizontalBarChart';
//import AdvanceTable from './components/Table/AdvanceTable';
import Navbar from './components/nabvar/Navbar';
//import AriaChart from './components/Chart/AriaChart';
import BeardCrumb from './components/beardcrumb/BeardCrumb';
// Import the custom hook as a named import
import useResizeeffect from './useResizeeffect';
import ScorBordForms from './components/Scorbord/ScorBordForms';
import OrganizationForm from './components/organization/CreateOrganization';

import { Button } from 'reactstrap';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import { ArrowUp } from 'react-feather'
function App_bk() {
  const [randomValue, setRandomValue] = useState(0);
  // Use the custom hook to get the values
  const { Width, phoneWidth, mainLeft, mainrotate, windowSize, dynamicTitle, secoundaryWidth, display, handleResize, menucollups, submenucollups, submenuexpand, updateTitle, handleMainResize } = useResizeeffect();
  const mainstyles = {
    marginLeft: `${mainLeft}rem`,
    position: 'relative',
    overflowX: 'hidden',
  };
  const navbar = {
    marginLeft: `${mainLeft}rem`,
  }
  useEffect(() => {
    window.addEventListener('load', handleMainResize);
    const interval = setInterval(() => {
      const randomInt = Math.floor(Math.random() * 99) + 1;
      setRandomValue(randomInt);
    }, 1000);
    return () => {
      window.removeEventListener('load', handleMainResize);
      clearInterval(interval);
    };
  }, [Width, handleMainResize, secoundaryWidth]);

  return (
    <div className="!min-h-screen bg-[#bac2c8] dark:bg-[#202020]">

        <Sidebar Width={Width} phoneWidth={phoneWidth} mainrotate={mainrotate} windowSize={windowSize} dynamicTitle={dynamicTitle} secoundaryWidth={secoundaryWidth} display={display} handleResize={handleResize} menucollups={menucollups} submenucollups={submenucollups} submenuexpand={submenuexpand} updateTitle={updateTitle} mainmenuresize={handleMainResize} />
        <Navbar navbar={navbar} />
        <div style={mainstyles} className='!transition-all mt-16 !duration-500 !ease !right-0 p-8 grid gap-4 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 overflow-y-auto scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded scrollbar-track:!bg-slate-500/[0.16] scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2'>
          <BeardCrumb />
          <div className=' flex gap-4'>
            <SimpleGaugeChart value={randomValue} />
            {<HorizontalBarChart />}
          </div>
          <div className="flex">
            <ScorBordForms />
          </div>
          <div className="flex">
                      <OrganizationForm />
          </div>

        </div>
        <div className='scroll-to-top'>
          <ScrollToTop showOffset={300} className='scroll-top block'>
            <Button className='btn-icon' color='primary'>
              <ArrowUp size={14} />
            </Button>
          </ScrollToTop>
        </div>

    </div>
  );
}

export default App_bk;
