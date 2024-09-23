// ** React Imports
import React from 'react';
import { useState } from 'react';
import axios from 'axios';


// ** MUI Imports
import Box from '@mui/material/Box';
import autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import PasswordInput from '../PasswordInput/PasswordInput';
import { Stack, Typography } from '@mui/material';


const FormPizza = () => {
  // ** States
  const [nome, setNome] = useState('');
  const [sabor, setSabor] = useState('');
  const [milho, setMilho] = useState('');
  const [cebola, setCebola] = useState('');
  const [valor, setValor] = useState('');
  const [tomate, setTomate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      nome,
      sabor,
      milho,
      cebola,
      valor,
      tomate
    });

    try {
      const response = await axios.post(
        'http://localhost:8080/usuario/register',
        JSON.stringify({
          nome,
          sabor,
          milho,
          cebola,
          valor,
          tomate
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      localStorage.setItem('nome', response.data.data.nome);
      localStorage.setItem('id', response.data.data.id_usuario);

      alert('Cadastro realizado com sucesso');
      setTimeout(() => {
        window.location.href = '/catalogo';
      }, 5000);

    } catch (error) {
      if (!error?.response) {
        alert('Não foi possível acessar o servidor');
        setError('Erro ao acessar o servidor');
        alert(error.response.data.message);
      } else if (error.response.status === 400) {
        setError('Erro nos dados de cadastro. Verifique os campos preenchidos.');
      } else {
        setError('Ocorreu um erro ao cadastrar.');
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
          Altere as informações das Pizzas aqui
        </Typography>
      </Stack>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tamanho"
                placeholder="Pequena, Média, Grande, Gigante ou GG"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                InputLabelProps={{
                  sx: { fontSize: '1.5rem' },
                }}
                InputProps={{
                  style: { fontSize: '2rem' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Sabores"
                placeholder="Portuugesa 1/2 Frango com Catupiry"
                value={sabor}
                onChange={(e) => setSabor(e.target.value)}
                InputLabelProps={{
                  sx: { fontSize: '1.5rem' },
                }}
                InputProps={{
                  style: { fontSize: '2rem' },
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <TextField
                  label="Toamte"
                  value={tomate}
                  placeholder="Sim ou não"
                  onChange={(e) => setTomate(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <TextField
                  label="Cebola"
                  placeholder="Sim ou não"
                  value={cebola}
                  onChange={(e) => setCebola(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <TextField
                  label="Milho"
                  placeholder="Sim ou não"
                  value={milho}
                  onChange={(e) => setMilho(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Valor"
                  value={valor}
                  placeholder="R$ 00,00"
                  onChange={(e) => setValor(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Stack
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  onClick={(e) => handleSubmit(e)}
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
                  Editar
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& a': { color: 'primary.main', textDecoration: 'none' },
                  }}
                >
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default FormPizza;
