import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import './style/index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
