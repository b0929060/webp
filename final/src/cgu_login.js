import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const Login=()=>{
    var output=[];
    output.push(
    <label style={{margin:'50px'}}><div>
        <h2>Login</h2>
    </div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
            <TextField id="standard-basic" label="User Name" variant="standard" /><br/>
            <TextField id="standard-basic" label="Password" variant="standard" type="password" />
       
        <div>
        <Button href="/Home" variant="contained">
      登入
    </Button><Button variant="text">註冊</Button>
        </div>
        </Box>
        </label>
        )
        return output;
}
export default Login;  
