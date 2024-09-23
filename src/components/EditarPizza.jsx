import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import FormCadastro from './forms/FormPizza';


const EditarPizza = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#000',
            }}
        >
            <Typography
                gutterBottom
                variant="h2"
                color={"#fff"}
                component="div"
            >
                Alterar
            </Typography>
            <Stack>
                <FormCadastro />
            </Stack>
        </Box>
    );
};

export default EditarPizza;
