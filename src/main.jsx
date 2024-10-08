import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './scss/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // ** React Imports
// import { Suspense, lazy } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'

// // ** Redux Imports
// import { store } from './redux/store'
// import { Provider } from 'react-redux'

// // ** Intl, CASL & ThemeColors Context
// import ability from './configs/acl/ability'
// import { AbilityContext } from './utility/context/Can'
// import { ThemeContext } from './utility/context/ThemeColors'

// // ** ThemeConfig
// import themeConfig from './configs/themeConfig'

// // ** Toast
// import { Toaster } from 'react-hot-toast'

// // ** i18n
// import './configs/i18n'

// // ** Spinner (Splash Screen)
// import Spinner from './@core/components/spinner/Fallback-spinner'

// // ** Ripple Button
// import './@core/components/ripple-button'

// // ** Fake Database
// import './@fake-db'

// // ** PrismJS
// import 'prismjs'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prismjs/components/prism-jsx.min'

// // ** React Perfect Scrollbar
// import 'react-perfect-scrollbar/dist/css/styles.css'

// // ** React Hot Toast Styles
// import '@styles/react/libs/react-hot-toasts/react-hot-toasts.scss'

// // ** Core styles
// import './@core/assets/fonts/feather/iconfont.css'
// import './@core/scss/core.scss'
// import './assets/scss/style.scss'

// ** Service Worker
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
