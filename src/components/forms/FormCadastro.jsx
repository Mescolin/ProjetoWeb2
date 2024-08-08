// ** React Imports
import React from 'react';
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


// ** Icon Imports
// import Icon from 'src/@core/components/icon'

const FormCadastro = () => {
  // ** States


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
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Nome'
                placeholder='Leonard Carter'
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
                label='Telefone'
                placeholder='(32) 99999-9999'
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
                label='Email'
                placeholder='exemplo@email.com'
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
                >
                </PasswordInput>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  password
                  InputLabelProps={{
                    sx: { fontSize: '1.5rem' },
                  }}
                  InputProps={{
                    style: { fontSize: '2rem' },
                  }}
                  label='Endereço'
                />
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
                    '& a': { color: 'primary.main', textDecoration: 'none' }
                  }}
                >
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormCadastro
