import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import rootReducer from './store.js'
import { configureStore } from '@reduxjs/toolkit'
import {Provider} from "react-redux"

const store=configureStore({
  reducer:rootReducer,
})

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
          <App />
    </Provider>
 
)
