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
import { CircularProgress, Stack, Typography } from '@mui/material';
import { LineAxisOutlined } from '@mui/icons-material';
import { red } from '@mui/material/colors';
import { toast } from 'react-toastify';


// ** Icon Imports
// import Icon from 'src/@core/components/icon'

const FormLogin = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroMsg, setErrorMsg] = useState('');
  const [error, setError] = useState(Boolean);
  const [loanding, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:8080/usuario/login',
        JSON.stringify({ email, senha }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      localStorage.setItem('nome', response.data.data.nome);
      localStorage.setItem('id', response.data.data.id);
      setError(false);

      toast.success(response.data.message);
      setTimeout(() => {
        window.location.href = '/catalogo';
      }, 5000);
      setErrorMsg('');

    } catch (error) {
      setError(true);
      setLoading(false);
      setErrorMsg(error.response.data.message);
      toast.error(error.response.data.message);
      alert(error.response.data.message);
      if (!error?.response) {
      } else if (error.response.status === 401) {
        setError('Email ou senha inválidos');
      }
    }
    finally {
      setLoading(false);
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
                error={error ? true : false}
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
                  error={error ? true : false}
                  label="Senha"
                  onChange={(e) => setSenha(e.target.value)}
                >
                </PasswordInput>
                {error ? <Typography sx={{ color: red[500], fontSize: '1.5rem' }}>{erroMsg}</Typography> : ''}
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
                  onClick={(e) => handleLogin(e)}
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
                  {loanding ? <CircularProgress color="inherit" /> : 'Entrar'}
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
