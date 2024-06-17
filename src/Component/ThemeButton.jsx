import React, { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import { FaMedapps, FaMoon,FaSun } from "react-icons/fa";

const ThemeButton = () => {
    
    const {dispatch,theme}=useContext(ThemeContext)

    const handleTheme = () =>{
        dispatch({
            type:'CHANGE_THEME'
        })
    }

  return (
   <button id='themeBtn' className={theme?'btn btn-warning':'btn btn-dark'}
   onClick={handleTheme}
   >
   {
    theme?<FaSun/>:<FaMoon/>
   }
    </button>
  )
}

export default ThemeButton
