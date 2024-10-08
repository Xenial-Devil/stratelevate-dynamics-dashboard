// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import {Link} from 'react-router-dom'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
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
  textDecoration: 'none',
  color: `${theme.palette.primary.main} !important`
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '& .MuiFormControlLabel-label': {
    color: theme.palette.text.secondary
  }
}))

const Register = () => {
  // ** States
  const [values, setValues] = useState({
    password: '',
    showPassword: false
  })

  // ** Hook
  const theme = useTheme()

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
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

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
                Adventure starts here
              </Typography>
              <Typography className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>Make your app management easy and fun!</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <CustomTextField
                autoFocus
                fullWidth
                id='username'
                sx={{ mb: 4 }}
                label='Username'
                placeholder='John.doe'
              />
              <CustomTextField fullWidth type='email' label='Email' sx={{ mb: 4 }} placeholder='john.doe@gmail.com' />
              <CustomTextField
                fullWidth
                label='Password'
                value={values.password}
                placeholder='············'
                id='auth-register-password'
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon fontSize='1.25rem' icon={values.showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <FormControlLabel
                control={<Checkbox className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]' />}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <Typography className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>I agree to </Typography>
                    <Typography component={LinkStyled} href='/' onClick={e => e.preventDefault()} sx={{ ml: 1 }}>
                      privacy policy & terms
                    </Typography>
                  </Box>
                }
              />
              <Button fullWidth type='submit' variant='contained' sx={{ mb: 2 }}>
                Sign up
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }} >
                <Typography sx={{ color: 'text.secondary', mr: 2 }} className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>Already have an account?</Typography>
                <Typography
                  component={LinkStyled}
                  href='#'
                >
                  Sign in instead
                </Typography>
              </Box>
              <Divider
                sx={{
                  '& .MuiDivider-wrapper': { px: 6 },
                  fontSize: theme.typography.body2.fontSize,
                  my: theme => `${theme.spacing(6)} !important`
                }}
                className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7] before:!border-t-[#2f2b3dc7] before:dark:!border-t-[#d0d4f1c7] after:!border-t-[#2f2b3dc7] after:dark:!border-t-[#d0d4f1c7] !my-8'
              >
                or
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box>
            </form>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default Register
