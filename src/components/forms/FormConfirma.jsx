import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Box, Button, Card, CardContent, Stack, Typography, Grid, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FormConfirma = ({ pedidos }) => {
  console.log(pedidos);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#000',
        padding: '2rem',
      }}
    >
      <Container
        sx={{ backgroundColor: '#d3d3d3', borderRadius: '10px', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant="h4" sx={{ marginBottom: '2rem' }}>
          Confirmar Pedidos
        </Typography>

        {pedidos.map((pedido, index) => (
          <Accordion key={index} sx={{ width: '100%', maxWidth: '700px', marginBottom: '1rem' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
              sx={{ backgroundColor: '#f0f0f0' }}
            >
              <Typography variant="h6">{`Pizza ${index + 1}: ${pedido.nome}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ fontSize: '1.5rem' }}>Nome: {pedido.nome}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h6" sx={{ fontSize: '1.5rem' }}>Valor: {pedido.preco}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        ))}

        <Stack
          direction="row"
          spacing={3}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#00A36C",
              color: "#fff",
              borderRadius: "50px",
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              '&:hover': {
                backgroundColor: '#008F5B',
              },
            }}
          >
            Confirmar Pedido
          </Button>

          <Button
            variant="outlined"
            color="error"
            sx={{
              borderColor: "#ED250A",
              color: "#ED250A",
              borderRadius: "50px",
              padding: "1rem 2rem",
              fontSize: "1.2rem",
              '&:hover': {
                backgroundColor: '#FDECEA',
                borderColor: '#C53523',
              },
            }}
          >
            Cancelar Pedido
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default FormConfirma;