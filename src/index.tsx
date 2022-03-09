import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import { initializeApp } from '@firebase/app'
import { Provider } from 'react-redux'
import { store } from './app/store'

console.log(process.env.REACT_APP_SENTRY_API_KEY)

// Initialize Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
initializeApp({
  apiKey: process.env.REACT_APP_SENTRY_API_KEY,
  authDomain: process.env.REACT_APP_SENTRY_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_SENTRY_DATABASE_URL,
  projectId: process.env.REACT_APP_SENTRY_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SENTRY_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENTRY_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_SENTRY_APP_ID,
  measurementId: process.env.REACT_APP_SENTRY_MEASUREMENT_ID
})

Sentry.init({
  dsn: 'https://4b6ef8fee478400dbac87b3337e096e3@o1161355.ingest.sentry.io/6247346',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
