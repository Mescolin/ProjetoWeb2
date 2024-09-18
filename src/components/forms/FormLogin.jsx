// ** React Imports
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// import { useState } from 'react'


// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import PasswordInput from '../PasswordInput/PasswordInput';
import { Stack, Typography } from '@mui/material';
import { LineAxisOutlined } from '@mui/icons-material';


// ** Icon Imports
// import Icon from 'src/@core/components/icon'

const FormLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user,setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);
    
    try{
      const response = axios.post('http://localhost:8080/usuario/login',
        JSON.stringify({email, password}),
        {
          headers:{'Content-Type': 'application/json'}
        }
      );

      console.log(response.data);

    }catch(error){
      if(!error?.response){
        setError('Erro ao acessar o servior');
      } else if (error.response.status === 401) {
        setError('Email ou senha inválidos');
      }
    }
  };

  return (
    <Card
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        width: "700px",
        height: "auto",
        margin: "auto",
        padding: "2rem",
        boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
      }}
    >
      <Stack>
        <Typography
          variant="h4"
          color="textPrimary"
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          Faça o seu login
        </Typography>

      </Stack>
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='email'
                placeholder='exemplo@email.com'
                required
                onChange={(e) => setEmail(e.target.value)}
                InputLabelProps={{
                  sx: { fontSize: '1.5rem' },
                }}
                InputProps={{
                  style: { fontSize: '2rem' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <PasswordInput
                  label="Senha"
                  onChange={(e) => setPassword(e.target.value)}
                >
                </PasswordInput>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Stack
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button
                  variant="contained"
                  onClick={(e)=>handleLogin(e)}
                  sx={{
                    backgroundColor: "#ED250A",
                    color: "#fff",
                    borderRadius: "50px",
                    width: "200px",
                    height: "5rem",
                    fontSize: "1.2rem",
                    '&:hover': {
                      backgroundColor: '#C53523',
                    },
                  }}
                >
                  Logar
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& a': { color: 'primary.main', textDecoration: 'none' }
                  }}
                >
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </form>
        <p>{error}</p>
      </CardContent>
    </Card>
  );
}

export default FormLogin
