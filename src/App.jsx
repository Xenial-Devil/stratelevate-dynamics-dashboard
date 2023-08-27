import { useState,useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import useResizeeffect from './useResizeeffect';
import Sidebar from './components/sidebar/sidebar';
import Navbar from './components/nabvar/Navbar';
import BeardCrumb from './components/beardcrumb/BeardCrumb';
import SimpleGaugeChart from './components/Chart/SimpleGaugeChart';
import './App.css'

function App() {
  const [randomValue, setRandomValue] = useState(0);
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
    <>
      <div className="!min-h-screen bg-[#bac2c8] dark:bg-[#202020]">
        <Router>
          <Sidebar Width={Width} phoneWidth={phoneWidth} mainrotate={mainrotate} windowSize={windowSize} dynamicTitle={dynamicTitle} secoundaryWidth={secoundaryWidth} display={display} handleResize={handleResize} menucollups={menucollups} submenucollups={submenucollups} submenuexpand={submenuexpand} updateTitle={updateTitle} mainmenuresize={handleMainResize} />
          <Navbar navbar={navbar} />
          <div style={mainstyles} className='!transition-all mt-16 !duration-500 !ease !right-0 p-8 grid gap-4 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 overflow-y-auto scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded scrollbar-track:!bg-slate-500/[0.16] scrollbar-thumb:!bg-slate-500/50 lg:supports-scrollbars:pr-2'>
            <BeardCrumb/>
            <div className=' flex gap-4'>
              <SimpleGaugeChart/>
            </div>
          </div>

        </Router>
      </div>
    </>
  )
}

export default App
