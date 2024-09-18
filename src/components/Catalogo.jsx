import { AppBar, Box, Button, Card, CardContent, CardMedia, Divider, Drawer, Grid, List, ListItem, ListItemText, Stack, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import HeaderCatalogo from './HeaderCatalogo';


const Catalogo = () => {
    const pizzas = [
        {
            "nome": "Calabresa",
            "valor": 35.90,
            "url": "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3277542:1663012513/Pizza%20de%20Calabresa.jpg?f=16x9&h=698&w=1280&$p$f$h$w=971b6f3"
        },
        {
            "nome": "Mussarela",
            "valor": 30.00,
            "url": "https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1932-5a1b7911dfda6e3c351c30de564da267.jpg"
        },
        {
            "nome": "Quatro Queijos",
            "valor": 42.50,
            "url": "https://www.portalumami.com.br/app/uploads/2021/07/Pizza-4-queijos.jpg"
        },
        {
            "nome": "Frango com Catupiry",
            "valor": 45.00,
            "url": "https://www.receitasnestle.com.br/sites/default/files/srh_recipes/86f7100c92218a97fac8e3bbd18ed787.jpg"
        },
        {
            "nome": "Portuguesa",
            "valor": 38.00,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEw4ZvGHORDTQX5o4XaMiyfxLck3ZEqgOxg&s"
        },
        {
            "nome": "Marguerita",
            "valor": 32.00,
            "url": "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/margherita-7d163fb8-1920w.jpg"
        },
        {
            "nome": "Pepperoni",
            "valor": 40.00,
            "url": "https://thumbs.dreamstime.com/z/pizza-pepperoni-de-rec%C3%A9m-fabricada-com-enchido-e-queijo-que-sai-da-crosta-pouco-saud%C3%A1vel-mas-delicioso-uma-popular-variedade-273757237.jpg"
        },
        {
            "nome": "Napolitana",
            "valor": 36.50,
            "url": "https://blog.ceraflame.com.br/wp-content/uploads/2021/06/Pizza-Napolitana-CERAFLAME.jpg"
        },
        {
            "nome": "Vegetariana",
            "valor": 34.00,
            "url": "https://img.cybercook.com.br/receitas/611/pizza-vegetariana-1.jpeg"
        },
        {
            "nome": "Brigadeiro",
            "valor": 48.00,
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfl1P1xzgnqILRP_jEzmla66MqIJMTMrI8A&s"
        },
        {
            "nome": "Banana com Canela",
            "valor": 45.00,
            "url": "https://guiadacozinha.com.br/wp-content/uploads/2007/01/pizzadebananaecanela.jpg"
        },
        {
            "nome": "Chocolate com Morango",
            "valor": 48.00,
            "url": "https://i.ytimg.com/vi/LxiWkcWI0js/maxresdefault.jpg"
        }
    ];
    const [carrinho, setCarrinho] = useState([]);
    const [carrinhoAberto, setCarrinhoAberto] = useState(false);

    const adicionarAoCarrinho = (pizza) => {
        setCarrinho([...carrinho, pizza]);
        setCarrinhoAberto(true);
    };

    const fecharCarrinho = () => {
        setCarrinhoAberto(false);
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
                        <Grid item xs={12} sm={6} md={4} lg={3} key={pizza.nome}>
                            <Card sx={{ width: '100%', height: 230, border: '2px solid red', backgroundColor: '#1E1E1E', }}>
                                <CardMedia
                                    component="img"
                                    alt={pizza.nome}
                                    height="110"
                                    image={pizza.url}
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
                                                R$ {pizza.valor.toFixed(2)}
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
                        {carrinho.map((item, index) => (
                            <ListItem key={index}>
                                <Box
                                    sx={{ border: '2px solid red', borderRadius: 2, width: '100%', }}
                                >
                                    <ListItemText
                                        primary={item.nome}
                                        secondary={`R$ ${item.valor.toFixed(2)}`}
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
                                Total
                            </Typography>
                            <Typography variant="h6" component="div">
                                R$ {carrinho.reduce((acc, item) => acc + item.valor, 0).toFixed(2)}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Drawer>
        </div>
    );
};

export default Catalogo;