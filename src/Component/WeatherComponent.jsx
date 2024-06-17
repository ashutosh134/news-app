import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import WeatherContext from '../Context/weather/WeatherContext'

const WeatherComponent = () => {
    const {theme} =useContext(ThemeContext);
    const {weatherData} =useContext(WeatherContext)

    if(!weatherData){
        return(
           <div className={theme?"card p-5 bg-secondary":"card p-5 bg-ligth"}>
             <h1 className="text-warning">Loading...</h1>
           </div>
        )
    }
  return (
    <div className={theme ?"card p-5 bg-dark text-light":"card p-5 "}>
     <div className="d-flex align-item-center justify-content-between">
     <span>
        <h1>{weatherData.current.temp_c}</h1>
        <h3>{weatherData.location.name}</h3>
      </span>

      <span>
        <img  style={{height:"60px"}}src={weatherData.current.condition.icon} alt="" />
       <p className='mx-1'>{weatherData.current.condition.text}</p>
        </span>
     </div>
    </div>
  )
}

export default WeatherComponent
