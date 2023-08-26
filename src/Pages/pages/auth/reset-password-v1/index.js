// ** React Imports
import { useState,useEffect } from 'react'

// ** Next Import
import {Link} from 'react-router-dom'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import userImageEffect from '../../../../components/useImageEffect';
import logo_dark from '../../../../img/Dark.svg';
import logo_lite from '../../../../img/Light.svg';
// ** Custom Component Import
import CustomTextField from '../../../../@core/components/mui/text-field'

// ** Icon Imports
import Icon from '../../../../@core/components/icon'

// ** Configs
import themeConfig from '../../../../configs/themeConfig'

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

const ResetPassword = () => {
  // ** States
  const [values, setValues] = useState({
    newPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showConfirmNewPassword: false
  })
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
  // ** Hook

  // Handle New Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  return (
    <Box className='content-center !bg-white dark:!bg-[#434343] !rounded-2xl !min-w-[27rem]'>
      <AuthIllustrationV1Wrapper>
        <Card className='!bg-white dark:!bg-[#434343] !min-w-[27rem]'>
          <CardContent sx={{ p: theme => `${theme.spacing(6.5, 8, 8)} !important` }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={logo.current} alt='logo'/>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant='h4' sx={{ mb: 1.5 }}>
                Reset Password
              </Typography>
              <Typography sx={{ display: 'flex' }}>
                for{' '}
                <Typography component='span' sx={{ ml: 1, fontWeight: 500 }}>
                  john.doe@email.com
                </Typography>
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <CustomTextField
                fullWidth
                autoFocus
                label='New Password'
                placeholder='············'
                value={values.newPassword}
                sx={{ display: 'flex', mb: 4 }}
                id='auth-reset-password-new-password'
                onChange={handleNewPasswordChange('newPassword')}
                type={values.showNewPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowNewPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon fontSize='1.25rem' icon={values.showNewPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <CustomTextField
                fullWidth
                label='Confirm Password'
                placeholder='············'
                sx={{ display: 'flex', mb: 4 }}
                value={values.confirmNewPassword}
                id='auth-reset-password-confirm-password'
                type={values.showConfirmNewPassword ? 'text' : 'password'}
                onChange={handleConfirmNewPasswordChange('confirmNewPassword')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                        onClick={handleClickShowConfirmNewPassword}
                      >
                        <Icon
                          fontSize='1.25rem'
                          icon={values.showConfirmNewPassword ? 'tabler:eye' : 'tabler:eye-off'}
                        />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 4 }}>
                Set New Password
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', '& svg': { mr: 1 } }}>
                <Typography component={LinkStyled} href='/pages/auth/login-v1'>
                  <Icon fontSize='1.25rem' icon='tabler:chevron-left' />
                  <span>Back to login</span>
                </Typography>
              </Typography>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  )
}
ResetPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ResetPassword
