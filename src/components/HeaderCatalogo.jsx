import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useState } from 'react';

function HeaderCatalogo() {
  const [nome, setNome] = useState('');

  useEffect(() => {
    const nomeSalvo = localStorage.getItem('nome');
    if (nomeSalvo) {
      setNome(nomeSalvo);
    }
  }, []);
  return (
    <AppBar position="sticky" sx={{ bgcolor: 'red', alignItems: 'center' }}>
      <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
        <Typography
          gutterBottom
          variant="h2"
          color={"#fff"}
          component="div"
        >
          Cardápio
        </Typography>
        <Typography variant="h4" component="div">
          {nome ? `${nome}` : ''}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default HeaderCatalogo;