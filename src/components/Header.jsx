import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import App from '../App';


const Container = styled(AppBar)`
    background : #060606;
    height:9vh;
`
function Header() {
    const logo = "https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Codepen-1024.png"
  return (
    <div>
        <Container position='static'>
            <Toolbar>
                <img src={logo} style={{
                    height : "44px",
                    width : "44px"
                }}></img>
            </Toolbar>
        </Container>
      {/* <h1>Hello from header</h1> */}
    </div>
  )
}

export default Header
