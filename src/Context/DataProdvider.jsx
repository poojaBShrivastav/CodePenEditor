import { createContext,useState } from "react";
import React from 'react'

export const Data_context = createContext()


function DataProdvider({children}) {
    const [html,sethtml] = useState("")
    const [css,setcss] = useState("")
    const [js,setjs] = useState("")
  return (
    <Data_context.Provider value={{
        html,
        sethtml,
        css,
        setcss,
        js,
        setjs
    }}
    >
        {children}

    </Data_context.Provider>
  )
}

export default DataProdvider
