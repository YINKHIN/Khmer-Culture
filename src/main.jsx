import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { LanguageContext, ThemeContext } from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageContext>
      <ThemeContext>
        <App />
      </ThemeContext>
    </LanguageContext>
  </StrictMode>,
)
