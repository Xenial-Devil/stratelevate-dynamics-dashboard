import Fab from '@mui/material/Fab'
import Icon from '../../../components/icon'
import ScrollToTop from '../../../components/scrolltotop/ScrollToTop'
import React from 'react'

const ScrolltoTop = () => {
  return (
      <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' className='!rounded-md !bg-[#010101]' aria-label='scroll back to top'>
              <Icon icon='tabler:arrow-up' />
          </Fab>
      </ScrollToTop>
  )
}

export default ScrolltoTop
