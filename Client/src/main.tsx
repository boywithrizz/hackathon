import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar/Navbar'
import UploadArchive from './Archive/Archive';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <UploadArchive />
  </StrictMode>,
)
