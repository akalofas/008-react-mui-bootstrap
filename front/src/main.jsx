import React from 'react'
import ReactDOM from 'react-dom/client'
import WebApp from './App.jsx'
import * as bootstrap from 'bootstrap'
import './styles/main.scss'
import './styles/main_custom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WebApp />
  </React.StrictMode>,
)
