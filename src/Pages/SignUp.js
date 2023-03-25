import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/UserSlice';
import {toast} from "react-toastify"
import {Link} from 'react-router-dom'


function SignUp() {

    const [formValue,setFormValue] = useState({
        name : "",
        email : "" , 
        password : ""
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeHandler =(e)=>{
    e.preventDefault();
    setFormValue({...formValue,[e.target.name] : e.target.value})
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(register({formValue , toast , navigate}))
    }

  return (
    <div style={{backgroundColor : "#E9F8F9"}}>
              <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
         onSubmit = {handleSubmit}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="lastName"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              onChange={changeHandler}
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="firstName"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="urlImg"
              label="urlImg"
              name="urlImg"
              autoComplete="urlImg"
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeHandler}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changeHandler}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/user/signin" variant="body2">
                  {"You have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default SignUp