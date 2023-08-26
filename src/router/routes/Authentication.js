// ** React Imports
import { lazy } from 'react'

const Login = lazy(() => import('../../pages/Login'))

const Register = lazy(() => import('../../views/pages/authentication/Register'))
// const RegisterBasic = lazy(() => import('../../views/pages/authentication/RegisterBasic'))
// const RegisterCover = lazy(() => import('../../views/pages/authentication/RegisterCover'))
// const RegisterMultiSteps = lazy(() => import('../../views/pages/authentication/register-multi-steps'))

const ForgotPassword = lazy(() => import('../../Pages/pages/auth/forgot-password-v1'))

const ResetPassword = lazy(() => import('../../Pages/pages/auth/reset-password-v1'))

// const VerifyEmailBasic = lazy(() => import('../../views/pages/authentication/VerifyEmailBasic'))
// const VerifyEmailCover = lazy(() => import('../../views/pages/authentication/VerifyEmailCover'))

const TwoSteps = lazy(() => import('../../Pages/pages/auth/two-steps-v1'))

const AuthenticationRoutes = [
  {
    path: '/login',
    element: <Login />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: '/register',
    element: <Register />,
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  // {
  //   path: '/pages/register-basic',
  //   element: <RegisterBasic />,
  //   meta: {
  //     layout: 'blank'
  //   }
  // },
  // {
  //   path: '/pages/register-cover',
  //   element: <RegisterCover />,
  //   meta: {
  //     layout: 'blank'
  //   }
  // },
  // {
  //   path: '/pages/register-multi-steps',
  //   element: <RegisterMultiSteps />,
  //   meta: {
  //     layout: 'blank'
  //   }
  // },

  {
    path: '/forgot-password',
    element: <ForgotPassword />,
    layout: 'BlankLayout',
    meta: {
      layout: 'blank',
      publicRoute: true,
      restricted: true
    }
  },
  {
    path: '/pages/forgot-password-basic',
    element: <ResetPassword />,
    meta: {
      layout: 'blank'
    }
  },
  // {
  //   path: '/pages/verify-email-basic',
  //   element: <VerifyEmailBasic />,
  //   meta: {
  //     layout: 'blank'
  //   }
  // },
  // {
  //   path: '/pages/verify-email-cover',
  //   element: <VerifyEmailCover />,
  //   meta: {
  //     layout: 'blank'
  //   }
  // },
  {
    path: '/pages/two-steps-basic',
    element: <TwoSteps />,
    meta: {
      layout: 'blank'
    }
  }
]

export default AuthenticationRoutes
