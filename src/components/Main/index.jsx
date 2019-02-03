import React, { Component } from "react";
import { Container, Header, Segment, Grid } from "semantic-ui-react";
import styled, { createGlobalStyle } from "styled-components";
import ActInput from "../ActInput";

import background from "../../bg.jpg";

const FullBackground = createGlobalStyle`
body {
  background-image: url(${background});

  height: 100%; 

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

const MainGridContainer = styled(Grid)`
  padding-top: 3em !important;
  .white {
    color: white;
  }
  .segment {
    margin-top: 20px !important;
  }import ActInput from '../ActInput/index';

`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <FullBackground />
        <MainGridContainer>
          <ActInput />
          <Container text>
            <Header className="white" as="h1" textAlign="center">
              Conteo electoral 2019
            </Header>
            <Header className="white" as="h3">
              Contemos Nosotros es una herramienta crowd-sourced o de
              colaboración abierta distribuida, totalmente anónima, capaz de
              verificar los conteos que se encuentran en las actas de las Juntas
              Electorales enviadas al TSE (Tribunal Supremo Electoral) de la
              República de El Salvador.
            </Header>
          </Container>
        </MainGridContainer>
      </React.Fragment>
    );
  }
}

export default App;
