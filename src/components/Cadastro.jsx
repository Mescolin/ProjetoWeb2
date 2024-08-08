import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import FormLayoutsBasic from './forms/FormLayoutsBasic';


const Cadastro = () => {

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
                Cadastro
            </Typography>
            <Stack


            >
                <FormLayoutsBasic />
            </Stack>
        </Box>
    );
};

export default Cadastro;
