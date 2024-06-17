import {Children, createContext, useReducer} from "react";
import { weatherReducer } from "./WeatherReducer";

const WeatherContext = createContext()

export const WeatherProvider =({children})=>{

    const initialState = {
        weatherData: null,
    };
 
        //{"location":{"name":"Indore","region":"Madhya Pradesh","country":"India","lat":22.72,"lon":75.83,"tz_id":"Asia/Kolkata","localtime_epoch":1713786283,"localtime":"2024-04-22 17:14"},
    //         "current":{"last_updated_epoch":1713785400,"last_updated":"2024-04-22 17:00","temp_c":31.0,"temp_f":87.8,"is_day":1,"condition":
    //         {"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png","code":1003},
    //         "wind_mph":6.9,"wind_kph":11.2,"wind_degree":230,"wind_dir":"SW","pressure_mb":1010.0,"pressure_in":29.83,"precip_mm":0.0,"precip_in":0.0,"humidity":41,"cloud":25,"feelslike_c":29.2,"feelslike_f":84.6,"vis_km":6.0,"vis_miles":3.0,"uv":8.0,"gust_mph":15.7,"gust_kph":25.3,"air_quality":{"co":237.0,"no2":1.8,"o3":108.7,"so2":2.3,"pm2_5":10.5,"pm10":21.0,"us-epa-index":1,"gb-defra-index":1}}}
    // }

    
 const[state,dispatch]=useReducer(weatherReducer,initialState)
      return (
        <WeatherContext.Provider value={{...state,dispatch}}>
            {children}
        </WeatherContext.Provider>
      )
}

 export default WeatherContext