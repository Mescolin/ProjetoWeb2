import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


// ** MUI Imports
import Box from '@mui/material/Box';
import
Autocomplete from '@mui/material/Autocomplete';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import
Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import { Stack, Typography } from '@mui/material';


const FormPizza = () => {
  // ** States
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preco, setPreco] = useState('');
  const [img_url, setImgUrl] = useState('');
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null); // Para armazenar a pizza selecionada

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:8080/pizza');
        const data = await response.json();
        setPizzas(data.data);
      } catch (error) {
        console.error('Erro ao buscar pizzas:', error);
      }
    };
    fetchPizzas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedPizza) {
      alert('Selecione uma pizza para editar!');
      return;
    }

    console.log({
      nome,
      ingredientes,
      preco,
      img_url
    });

    try {
      const response = await axios.put(
        `http://localhost:8080/pizza/${selectedPizza.id}`, // Usar o ID da pizza selecionada
        JSON.stringify({
          nome,
          ingredientes,
          preco,
          img_url
        }),
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );
      console.log(response);

      alert('Pizza editada com sucesso!');

    } catch (error) {
      if (!error?.response) {
        alert('Não foi possível acessar o servidor');
        alert(error.response.data.message);
      }
    }
  };


  const handlePizzaSelect = (event, newValue) => {
    setSelectedPizza(newValue);
    if (newValue) {
      setNome(newValue.nome);
      setIngredientes(newValue.ingredientes);
      setPreco(newValue.preco);
      setImgUrl(newValue.img_url);
    } else {
      setNome('');
      setIngredientes('');
      setPreco('');
      setImgUrl('');
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
              <Autocomplete
                options={pizzas}
                getOptionLabel={(option) => option.nome}
                value={selectedPizza}
                onChange={handlePizzaSelect}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Selecione a pizza"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      sx: { fontSize: '1.5rem' },
                    }}
                    InputProps={{
                      ...params.InputProps,
                      style: { fontSize: '2rem' },
                    }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="ingredientes"
                placeholder="Banana, canela, açúcar"
                value={ingredientes}
                onChange={(e) => setIngredientes(e.target.value)}
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
                <TextField
                  label="nome"
                  value={nome}
                  placeholder="pizza 2"
                  onChange={(e) => setNome(e.target.value)}
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
                  label="preco"
                  value={preco}
                  placeholder="R$ 00,00"
                  onChange={(e) => setPreco(e.target.value)}
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
                  label="url da imagem"
                  value={img_url}
                  placeholder="R$ 00,00"
                  onChange={(e) => setImgUrl(e.target.value)}
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
