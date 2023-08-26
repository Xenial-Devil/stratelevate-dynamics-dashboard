// ** Next Import
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import userImageEffect from '../../../../components/useImageEffect';
// import DefaultPalette from '../../../../@core/components/mui/customtheme';

import logo_dark from '../../../../img/Dark.svg';
import logo_lite from '../../../../img/Light.svg';
// ** Custom Component Import
import CustomTextField from '../../../../@core/components/mui/text-field'

// ** Icon Imports
import Icon from '../../../../@core/components/icon'

// ** Layout Import
import BlankLayout from '../../../../@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationV1Wrapper from '../../../../views/pages/auth/AuthIllustrationV1Wrapper'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '27rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: `${theme.palette.primary.main} !important`
}))

const ForgotPasswordV1 = () => {
  // ** Hook
  const { isNightMode, logo, toggle } = userImageEffect();
  const [moode, setMoode] = useState('light');
  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    const newNightMode = JSON.parse(storedDarkMode);
    if (newNightMode) {
      logo.current = logo_dark;
      setMoode('dark');
    }
    else {
      logo.current = logo_lite;
      setMoode('light');
    }
  }, [logo, toggle, moode]);
  return (
    <Box className='content-center !bg-white dark:!bg-[#434343] !rounded-2xl !min-w-[27rem]'>
      <AuthIllustrationV1Wrapper>
        <Card className='!bg-white dark:!bg-[#434343] !min-w-[27rem]'>
          <CardContent sx={{ p: theme => `${theme.spacing(6.5, 8, 8)} !important` }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={logo.current} alt='logo' />
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant='h4' sx={{ mb: 1.5 }} className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>
                Forgot Password?
              </Typography>
              <Typography sx={{ color: 'text.secondary' }} className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>
                Enter your email and we&prime;ll send you instructions to reset your password
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <CustomTextField
                autoFocus
                fullWidth
                id='useremail'
                type='email'
                label='Email'
                mood={moode}
                sx={{ display: 'flex', mb: 4 }}
                placeholder='john.doe@gmail.com'
                InputLabelProps='!text-gray-700 dark:!text-gray-400'
              />
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
                Send reset link
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <LinkStyled href='#'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Back to login</span>
                </LinkStyled>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  )
}
ForgotPasswordV1.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ForgotPasswordV1
