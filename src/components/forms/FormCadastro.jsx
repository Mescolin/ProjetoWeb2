// ** React Imports
import React from 'react';
import { useState } from 'react';
import axios from 'axios';


// ** MUI Imports
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import PasswordInput from '../PasswordInput/PasswordInput';
import { Stack, Typography } from '@mui/material';

const FormCadastro = () => {
  // ** States
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      nome,
      email,
      senha,
      logradouro,
      numero,
      bairro,
      cidade,
      estado,
      cep
    });

    try {
      const response = await axios.post(
        'http://localhost:8080/usuario/register',
        JSON.stringify({
          nome,
          email,
          senha,
          logradouro,
          numero,
          bairro,
          cidade,
          estado,
          cep
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
          Insira suas informações
        </Typography>
      </Stack>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Nome"
                placeholder="Leonard Carter"
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
                label="Email"
                placeholder="exemplo@email.com"
                value={email}
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
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="CEP"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="Logradouro"
                  value={logradouro}
                  onChange={(e) => setLogradouro(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="Número"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="Bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <TextField
                  label="Estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
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
                  Cadastrar
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

export default FormCadastro;
