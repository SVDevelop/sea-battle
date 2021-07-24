import React from 'react'
import ReactDOM from 'react-dom'
import {SeaBattle} from './components'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <SeaBattle cellSize={50}> 
        <App />
      </SeaBattle>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)