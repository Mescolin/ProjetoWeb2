import React from "react";
import { Container } from "@mui/material";
import axios from "axios";
import { useState } from "react";

// Google Maps Distance Matrix API

export const Calculator = () => {
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    const getDistanceMatrix = async () => {
        const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
        console.log(apiKey);
        const origins = "Av. Astolfo Dutra, 70 - Centro, Cataguases - MG, 36770-001";
        const destinations = "Praça Manoel Inácio Peixoto, 136 - Centro, Cataguases - MG, 36770-071";
        //ativar o link abaixo para poder fazer a request
        //https://cors-anywhere.herokuapp.com/corsdemo
        const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origins}&destinations=${destinations}&key=${apiKey}`
        console.log(url);
        const response = await axios.get(url);

        const data = response.data;
        if (data.rows[0].elements[0].status == "OK") {
            setDistance(data.rows[0].elements[0].distance.text);
            setDuration(data.rows[0].elements[0].duration.text);
            console.log(data.rows[0].elements[0].distance.text);
            alert(distance);
        } else {
            alert("Error fetching data from Google Maps API");
            console.error("Error fetching data from Google Maps API");
        }
    };
    return (
        <Container
            //cor de fundo
            style={{
                backgroundColor: "#f8f9fa",
                padding: "100px 0",
                textAlign: "center",
                color: "#000",
            }}
        >
            <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Vamos calular o tempo de entrega</h2>
            </div>

            <div>
                <button onClick={getDistanceMatrix}>Get Distance</button>
                {distance && <p>Distance: {distance}</p>}
                {duration && <p>Duration: {duration}</p>}
            </div>


        </Container>

    );
};