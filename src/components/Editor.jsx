import React from 'react'
import { useState } from 'react';
import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {UnControlled as CodeMirror, Controlled} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import "../App.css"

const Container = styled(Box)`
flex-grow:1;
flex-basis:0;
display:flex;
flex-direction:column;
padding:1px;
`

const Heading = styled(Box)`
        background : #1d1e22;
        display : flex;
        padding : 1px;
        
    `
const Header = styled(Box)`
display : flex;
background : #060606;
color : #aaaebc;
justify-content : space-between;
font-weight : bold;
`
function Editor({heading,icon,color,value,onchange}) {
  const [open,setopen] = useState(true);

  const handleChange= (editor,data,value)=>{
    onchange(value)
  }
    
  return (
    // <div>
      <Container style={open ? null : {flexGrow:0}}>
            <Header>
                <Heading >
                    <Box component="span" style={{
                        background : color,
                        height : "20px",
                        width : "20px",
                        display : "flex",
                        placeContent : "center",
                        borderRadius : "5px",
                        marginRight : "5px",
                        paddingBottom : "2px",
                        // color:"#fff",
                    }}>{icon}</Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon 
                fontSize="small"
                style={{
                  alignSelf:"center"
                }}
                onClick={()=>{
                  
                  return setopen(preState => !preState)
                }} />
            </Header>
            <Controlled 
            className='controlled-editor'
            value={value}
            onBeforeChange={handleChange}
            options={{
              theme : "materials",
              lineNumbers : true
            }}/>
            {/* <Box></Box> */}
      </Container>
    // </div>
  )
}

export default Editor
