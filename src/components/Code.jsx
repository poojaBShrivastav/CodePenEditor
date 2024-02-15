import {React , useContext, useState } from 'react'
import {Box,styled} from '@mui/material';
import Editor from './Editor'

import { Data_context } from "../Context/DataProdvider"

const Container = styled(Box)`
  display:flex;
  background-color:#060606;
  // height:50vh;
`

function Code() {
  const {html,sethtml,css,setcss,js,setjs} =  useContext(Data_context)
  return (
    <Container>
      <Editor
       heading="HTML"
       icon="/" 
       color="#ff3c41"
       value = {html}
       onchange = {sethtml}/>

      <Editor 
      heading="CSS"
      icon="*"
      color="#0ebeff"
      value={css}
      onchange={setcss}/>

      <Editor
       heading="JAVASCRIPT"
       icon="()"
       color="#fcd000"
       value={js}
       onchange={setjs}
       />
    </Container>
  )
}

export default Code
