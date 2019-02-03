import React, { Component } from "react";
import { Container, Header, Grid } from "semantic-ui-react";
import styled from "styled-components";
import ActSegment from "../ActSegment/index";
import ImageBackground from "../ImageBackground";

const MainGridContainer = styled(Grid)`
  padding-top: 3em !important;
  padding-bottom: 5em !important;
  margin: 0px !important;
  .white {
    color: white;
    line-height: 2em;
  }
  .segment {
    margin-top: 20px !important;
  }

  @media only screen and (min-width: 1372px) {
    .ui.text.container.home-about {
      padding-top: 2em;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageBackground />
        <MainGridContainer>
          <ActSegment />
          <Container text className="home-about">
            <Header className="white" as="h1" textAlign="center">
              Conteo electoral 2019
            </Header>
            <Header className="white" as="h3" textAlign="center">
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
