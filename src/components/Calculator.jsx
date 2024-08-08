import React, { useEffect } from "react";
import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import Button from '@mui/material/Button';

// Google Maps Distance Matrix API

export const Calculator = () => {
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");
    const [destinations, setDestinations] = useState("");
    const [cep, setCep] = useState("");

    const getDestinationsbyCEP = async () => {
        try {
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            console.log(data.logradouro + ", " + data.bairro + ", " + data.localidade + " - " + data.uf);
            setDestinations(data.logradouro + ", " + data.bairro + ", " + data.localidade + " - " + data.uf);
        } catch {

        }
    }

    useEffect(() => {
        if (destinations) {
            getDistanceMatrix();
        }
    }, [destinations]);

    const getDistanceMatrix = async () => {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        console.log(apiKey);
        const origins = "Avenida Astolfo Dutra, Centro, Cataguases - MG";
        const dest = destinations;
        //ativar o link abaixo para poder fazer a request
        //https://cors-anywhere.herokuapp.com/corsdemo
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origins}&destinations=${dest}&key=${apiKey}`
        const response = await axios.get(url);

        const data = response.data;
        if (data.rows[0].elements[0].status == "OK") {
            const tempoEmSegundos = data.rows[0].elements[0].duration.value;
            const tempoEmMinutos = tempoEmSegundos / 60;
            const tempoTotalEmMinutos = tempoEmMinutos + 50;
            const horas = Math.floor(tempoTotalEmMinutos / 60);
            const minutos = Math.round(tempoTotalEmMinutos % 60);
            if (horas == 0) {
                setDuration(`${minutos} minuto(s)`);
            }
            else {
                setDuration(`${horas} hora(s) e ${minutos} minuto(s)`);
            }
            setDistance(data.rows[0].elements[0].distance.text);
        } else {
            alert("Ocorreu um erro ao calcular a distância! Tente novamente.");
        }
    };
    return (
        <Stack
            direction="column"
            alignContent={"center"}
            justifyContent={"center"}
            style={{
                textAlign: "center",
            }}
        >
            <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Vamos calular o tempo de entrega</h2>
            </div>

            <Stack
                direction="column"
                spacing={2}
                alignItems="center"
            >
                <TextField
                    label="CEP"
                    error
                    size="medium"
                    InputLabelProps={{
                        sx: { fontSize: '1.5rem' },
                    }}
                    InputProps={{
                        style: { fontSize: '2rem' },
                    }}
                    onChange={(e) => setCep(e.target.value)}

                />
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#ED250A",
                        color: "#fff",
                        borderRadius: "50px",
                        width: "250px",
                        height: "7rem",
                        fontSize: "1.5rem",
                        '&:hover': {
                            backgroundColor: '#C53523',
                        },
                    }}
                    onClick={getDestinationsbyCEP}
                >
                    Calcular Tempo de Entrega
                </Button>

                {duration && <Typography variant="subtitle1" component="div" sx={{
                    fontSize: '2rem'
                }}>Estimativa de duração da entrega: {duration}</Typography>}
            </Stack>


        </Stack>

    );
};