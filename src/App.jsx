import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Component/Navbar'
import ThemeButton from './Component/ThemeButton'
import moduleName from 'module'
import Home from './pages/Home'
import { WeatherProvider } from './Context/weather/WeatherContext'
import { NewsProvider } from './Context/news/NewsContext'
const App = () => {
  return (
   <NewsProvider>
     <WeatherProvider>
      <Navbar/>
      <Home/>
      <ThemeButton/>

    </WeatherProvider>
   </NewsProvider>
  )
}

export default App

