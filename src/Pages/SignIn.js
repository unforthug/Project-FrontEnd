import React , {useEffect} from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {login } from '../Redux/UserSlice';
import {toast} from "react-toastify"
import {Link} from 'react-router-dom'


function SignIn() {

    const [formValue,setFormValue] = useState()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const changeHandler =(e)=>{
    e.preventDefault();
    setFormValue({...formValue,[e.target.name] : e.target.value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(login({formValue , toast , navigate}))
        
    }

    const { userLoggedIn, appErr } = useSelector((state) => state.auth);

    useEffect(() => {
      toast.error(appErr);
    }, [appErr]);

  return (
    <div style={{backgroundColor : "#E9F8F9"}}>
    {!userLoggedIn && (
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
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link to="/user/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      )}
    </div>
  )
}

export default SignIn