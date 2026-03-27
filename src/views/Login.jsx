import React from 'react'
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/profile');
    }
    
  return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <Stack
              component="form"
              sx={{ width: '25ch' }}
              spacing={2}
              noValidate
              autoComplete="off"
          >
              <h2>Login</h2>

              <TextField
                  hiddenLabel
                  label="Usuario"
                  variant="outlined"
              />
              <TextField
                  hiddenLabel
                  label="Contraseña"
                  variant="outlined"
              />
              <Button variant="contained" onClick={handleLogin}>
                Login
                </Button>
          </Stack>
      </div>

  )
}

export default Login

