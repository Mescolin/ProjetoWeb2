import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import FormLogin from './forms/FormLogin';


const Login = () => {

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
                Login
            </Typography>
            <Stack>
                <FormLogin />
            </Stack>
        </Box>
    );
};

export default Login;
