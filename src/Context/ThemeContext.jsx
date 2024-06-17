import { createContext, useReducer } from "react";

const ThemeContext= createContext()

export const ThemeProvider=({children})=>{

    const  initialState ={
        theme:true
    }
    const ThemeReducer=(state,action)=>{
        switch(action.type  ){
            case "CHANGE_THEME" :
                return{
                    ...state,
                    theme:state.theme ? false : true,
                }
        }
    }

   const [state,dispatch]=useReducer(ThemeReducer,initialState)

    return(
        <ThemeContext.Provider value={{...state,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContext;