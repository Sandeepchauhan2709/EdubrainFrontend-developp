import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from './store'

const rootElement = document.getElementById('root')
let root = null
if (rootElement !== null) {
  root = ReactDOM.createRoot(rootElement)
  // continue with your code
} else {
  console.error("Root element with ID 'root' not found.")
}
if (root !== null) {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />

        <Toaster />
      </Provider>
    </React.StrictMode>
  )
}

reportWebVitals()
