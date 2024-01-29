import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from './assets/theme'
import App from './App'
import 'normalize.css'
import '@/assets/css/index.less'
import store from './store'
import Skeleton from '@mui/material/Skeleton'

const Loader = () => (
  <>
    <Skeleton variant="rect" width="100%" height={80} />
    <div style={{ display: 'flex', width: '100%', height: '600px' }}>
      <div style={{ width: '58%', padding: '1% 0 0% 2%' }}>
        <Skeleton
          variant="rectangular"
          style={{ width: '100%', height: '100%', borderRadius: '4px' }}
        />
      </div>
      <div
        style={{
          width: '33%',
          height: '100%',
          padding: '1% 0 0 2%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        {Array.from(new Array(4)).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            style={{
              width: '46%',
              height: '46%',
            }}
          />
        ))}
      </div>
    </div>
    <Skeleton variant="text" sx={{ fontSize: '3rem', marginTop: '1%' }} />
  </>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Suspense>
  </Provider>
)
