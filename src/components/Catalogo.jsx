import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Box, Button, Card, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import HeaderCatalogo from './HeaderCatalogo';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Catalogo = () => {
    const [pizzas, setPizzas] = useState([]);
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);
    const { cart, setCart } = useContext(CartContext);
    const navigate = useNavigate();

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

    const adicionarAoCarrinho = (pizza) => {
        setCart([...cart, pizza]);
        setCarrinhoAberto(true);
    };

    const fecharCarrinho = () => {
        setCarrinhoAberto(false);
    };

    const handleCheckout = () => {
        navigate('/PaginaConfirmacao');
    };

    return (
        <div>
            <HeaderCatalogo />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    backgroundColor: '#000',
                }}
            >
                <Grid
                    container
                    spacing={3}
                    p={12}
                >
                    {pizzas.map((pizza) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={pizza.id}>
                            <Card sx={{ width: '100%', height: 230, border: '2px solid red', backgroundColor: '#1E1E1E', }}>
                                <CardMedia
                                    component="img"
                                    alt={pizza.nome}
                                    height="110"
                                    image={pizza.img_url} // Usar img_url da API
                                />
                                <CardContent
                                    sx={{
                                        backgroundColor: '#1E1E1E',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                        justifyContent="flex-end"
                                        mt={1}
                                    >
                                        <Box
                                            width="100%"
                                        >
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                color={"#fff"}
                                                component="div"
                                            >
                                                {pizza.nome}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="#fff"
                                                fontSize={16}
                                            >
                                                R$ {pizza.preco.toFixed(2)}
                                            </Typography>
                                        </Box>
                                        <Box
                                        >

                                            <Button
                                                variant="contained"
                                                color="primary"
                                                sx={{
                                                    backgroundColor: "#ED250A",
                                                    color: "#fff",
                                                    width: "200px",
                                                    height: "4.5rem",
                                                    fontSize: "1.3rem",
                                                    '&:hover': {
                                                        backgroundColor: '#C53523',
                                                        color: "#fff",
                                                    },
                                                }}
                                                onClick={() => adicionarAoCarrinho(pizza)}
                                            >
                                                Comprar
                                            </Button>
                                        </Box>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Drawer anchor="right" open={carrinhoAberto} onClose={fecharCarrinho}>
                <Box sx={{ width: 350, padding: 2 }}>
                    <Typography variant="h5" gutterBottom>
                        Carrinho de Compras
                    </Typography>
                    <Divider />
                    <List>
                        {cart.map((item, index) => (
                            <ListItem key={index}>
                                <Box
                                    sx={{ border: '2px solid red', borderRadius: 2, width: '100%', }}
                                >
                                    <ListItemText
                                        primary={item.nome}
                                        secondary={`R$ ${item.preco.toFixed(2)}`}
                                        sx={{
                                            '& .MuiListItemText-primary': { fontSize: '1.5rem' },
                                            '& .MuiListItemText-secondary': { fontSize: '1.2rem' }
                                        }}
                                    />

                                </Box>
                            </ListItem>
                        ))}
                    </List>
                    <AppBar position="absolute" sx={{ bgcolor: 'red', alignItems: 'center', top: "92.5vh" }}>
                        <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
                            <Typography
                                gutterBottom
                                variant="h6"
                                color={"#fff"}
                                component="div"
                            >
                                Total R$ {cart.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}
                            </Typography>
                            <Box
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{
                                        backgroundColor: "#ffff",
                                        color: "#000",
                                        width: "200px",
                                        height: "4.5rem",
                                        fontSize: "1.3rem",
                                        '&:hover': {
                                            backgroundColor: '#C53523',
                                            color: "#fff",
                                        },
                                    }}
                                    onClick={handleCheckout}
                                >
                                    Finalizar Pedido
                                </Button>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Drawer>
        </div>
    );
};

export default Catalogo;