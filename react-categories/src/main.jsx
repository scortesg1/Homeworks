import React from 'react'
import ReactDOM from 'react-dom/client'
import GifExpertApp from './GifExpertApp.jsx'
import MultipleCustomHooks from './components/MultipleCustomHooks.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
    <MultipleCustomHooks/>
  </React.StrictMode>,
)
