import React from 'react'
import ReactDOM from 'react-dom'
import {SeaBattle} from './components'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { Provider } from 'react-redux'

import store from './store'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter >
        <DndProvider backend={HTML5Backend} >
          {/* <Configure> */}
            <SeaBattle> 
              <App />
            </SeaBattle>
          {/* </Configure> */}
        </DndProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)