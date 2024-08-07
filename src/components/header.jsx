import React from "react";
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Box
                  display="contents"
                  alignItems="center"
                  flex-direction="column"
                >
                  <Button
                    variant="contained"
                    href="#features"
                    sx={{
                      backgroundColor: "#C53523",
                      color: "#fff",
                      borderRadius: "50px",
                      width: "200px",
                      height: "4.5rem",
                      fontSize: "1.3rem",
                      '&:hover': {
                        backgroundColor: '#ED250A',
                        color: "#fff",
                      },
                    }}
                  >
                    Saiba mais
                  </Button>
                  <Button
                    variant="contained"
                    component={Link}
                    to="/catalogo"
                    sx={{
                      backgroundColor: "#C53523",
                      color: "#fff",
                      borderRadius: "50px",
                      width: "200px",
                      height: "4.5rem",
                      fontSize: "1.3rem",
                      '&:hover': {
                        backgroundColor: '#ED250A',
                        color: "#fff",
                      },
                    }}
                  >
                    Encomendar Agora
                  </Button>

                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
