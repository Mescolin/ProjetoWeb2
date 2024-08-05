import React from "react";
import Box from '@mui/material/Box';

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
                </h1>z
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <Box
                  display="contents"
                  alignItems="center"
                  flex-direction="column"
                >
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Saiba mais
                  </a>{" "}
                  <a
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Calcule o tempo de entrega
                  </a>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
