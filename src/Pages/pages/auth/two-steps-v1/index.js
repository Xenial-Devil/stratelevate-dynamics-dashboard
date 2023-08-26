// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { Link } from 'react-router-dom'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import FormHelperText from '@mui/material/FormHelperText'
import userImageEffect from '../../../../components/useImageEffect';
import logo_dark from '../../../../img/Dark.svg';
import logo_lite from '../../../../img/Light.svg';
// ** Third Party Imports
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'

// ** Configs
import themeConfig from '../../../../configs/themeConfig'

// ** Layout Import
import BlankLayout from '../../../../@core/layouts/BlankLayout'

// ** Demo Imports
import AuthIllustrationV1Wrapper from '../../../../views/pages/auth/AuthIllustrationV1Wrapper'

// ** Custom Styled Component
import CleaveWrapper from '../../../../@core/styles/libs/react-cleave'

// ** Util Import
import { hexToRGBA } from '../../../../@core/utils/hex-to-rgba'

// ** Styles
import 'cleave.js/dist/addons/cleave-phone.us'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '27rem' }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} `
}))

const CleaveInput = styled(Cleave)(({ theme }) => ({
  maxWidth: 48,
  textAlign: 'center',
  height: '48px ',
  fontSize: '150% ',
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '&:not(:last-child)': {
    marginRight: theme.spacing(2)
  },
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    margin: 0,
    WebkitAppearance: 'none'
  }
}))

const defaultValues = {
  val1: '',
  val2: '',
  val3: '',
  val4: '',
  val5: '',
  val6: ''
}

const TwoSteps = () => {
  // ** State
  const [isBackspace, setIsBackspace] = useState(false)

  // ** Hooks
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
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues })

  // ** Vars
  const errorsArray = Object.keys(errors)

  const handleChange = (event, onChange) => {
    if (!isBackspace) {
      onChange(event)

      // @ts-ignore
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      if (form[index].value && form[index].value.length) {
        form.elements[index + 1].focus()
      }
      event.preventDefault()
    }
  }

  const handleKeyDown = event => {
    if (event.key === 'Backspace') {
      setIsBackspace(true)

      // @ts-ignore
      const form = event.target.form
      const index = [...form].indexOf(event.target)
      if (index >= 1) {
        if (!(form[index].value && form[index].value.length)) {
          form.elements[index - 1].focus()
        }
      }
    } else {
      setIsBackspace(false)
    }
  }

  const renderInputs = () => {
    return Object.keys(defaultValues).map((val, index) => (
      <Controller
        key={val}
        name={val}
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Box
            data-id={`otp-input-${index+1}`}
            type='tel'
            maxLength={1}
            value={value}
            autoFocus={index === 0}
            component={CleaveInput}
            onKeyDown={handleKeyDown}
            onChange={event => handleChange(event, onChange)}
            className='!text-black dark:!text-white !placeholder-gray-700 dark:!placeholder-gray-300 !border-1 !border-gray-500 dark:!border-gray-400'
            options={{ blocks: [1], numeral: true, numeralPositiveOnly: true }}
            sx={{ [theme.breakpoints.down('sm')]: { px: `${theme.spacing(2)} ` } }}
          />
        )}
      />
    ))
  }

  return (
    <Box className='content-center !bg-white dark:!bg-[#434343] !rounded-2xl !min-w-[27rem]'>
      <AuthIllustrationV1Wrapper>
        <Card className='!bg-white dark:!bg-[#434343] !min-w-[27rem]'>
          <CardContent sx={{ p: theme => `${theme.spacing(6.5, 8, 8)} ` }}>
            <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={logo.current} alt='logo' />
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography variant='h4' sx={{ mb: 1 }} className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>
                Two-Step Verification
              </Typography>
              <Typography sx={{ mb: 1, color: 'text.secondary' }} className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
              </Typography>
              <Typography variant='h6' className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>******9763</Typography>
            </Box>
            <Typography sx={{ fontWeight: 500, color: 'text.secondary' }} className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>Type your 6 digit security code</Typography>
            <form onSubmit={handleSubmit(() => true)}>
              <CleaveWrapper
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  ...(errorsArray.length && {
                    '& .invalid:focus': {
                      borderColor: theme => `${theme.palette.error.main} `,
                      boxShadow: theme => `0 1px 3px 0 ${hexToRGBA(theme.palette.error.main, 0.4)}`
                    }
                  })
                }}
              >
                {renderInputs()}
              </CleaveWrapper>
              {errorsArray.length ? (
                <FormHelperText sx={{ color: 'error.main', fontSize: theme => theme.typography.body2.fontSize }}>
                  Please enter a valid OTP
                </FormHelperText>
              ) : null}
              <Button fullWidth type='submit' variant='contained' sx={{ mt: 2 }}>
                Verify My Account
              </Button>
            </form>
            <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography className='!text-[#2f2b3dc7] dark:!text-[#d0d4f1c7]'>Didn't get the code?</Typography>
              <Typography component={LinkStyled} href='/' onClick={e => e.preventDefault()} sx={{ ml: 1 }}>
                Resend
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </AuthIllustrationV1Wrapper>
    </Box>
  )
}
TwoSteps.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default TwoSteps
