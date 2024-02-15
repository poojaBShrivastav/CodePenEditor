import React from 'react'
import { useContext ,useState,useEffect} from 'react';
import { Data_context } from '../Context/DataProdvider';
import {Box,styled} from '@mui/material';
function Result() {
    const [src,setsrc] = useState()
    const {html,css,js} = useContext(Data_context)
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(()=>{
       const timeout = setTimeout(()=>{
            setsrc(srcCode)
        },1000 )

        return ()=> clearTimeout(timeout)
    },[html,css,js])
  return (
   <Box>
        <iframe 
            srcDoc={src}
            title='Output'
            sandbox="allow-scripts"
            frameBorder={0}
            width="100%"
            height="100%"
            >

        </iframe>
   </Box>
  )
}

export default Result
