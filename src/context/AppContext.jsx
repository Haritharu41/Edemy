import React from "react";
import { createContext } from "react";

export const AppContext = createContext();


export const AppContextProvider=(propes)=>{

    const value = {}
     return (
         <AppContext.Provider value={ value}>
            {propes.children}
         </AppContext.Provider>
     )
}
