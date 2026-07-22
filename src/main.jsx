import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import NotFound from './components/NotFound'
import './index.css'

const path = window.location.pathname

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {path === '/' ? <App /> : <NotFound />}
  </React.StrictMode>
)
