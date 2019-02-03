import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import styled from "styled-components";
import ActInput from "../ActInput";

const TransparentSegment = styled(Segment)`
  background: rgba(0, 0, 0, 0.5) !important;
  color: #fff !important;
  h1.ui.header,
  h4.ui.header {
    color: #fff;
  }
`;

class ActSegment extends Component {
  state = {
    started: false
  };

  handleStartButtonClick = () => {
    this.setState({ started: true });
  };

  render() {
    const { started } = this.state;
    return (
      <Container text textAlign="center">
        <TransparentSegment>
          <Header as="h1">Ayúdanos a digitar actas</Header>
          <Header as="h4">
            Digita únicamente los números (sin guiones) que observes en la
            imagen. Si aparece vacía o solo contiene guiones, digita "0".
            <br />
            <br />
            Escribe el número en el cuadro de texto y luego presiona "Enviar
            Acta" o la tecla [Enter].
          </Header>
          {started ? (
            <ActInput />
          ) : (
            <button
              className="ui massive primary button"
              onClick={this.handleStartButtonClick}
            >
              ¡Empezar!
            </button>
          )}
        </TransparentSegment>
      </Container>
    );
  }
}

export default ActSegment;
