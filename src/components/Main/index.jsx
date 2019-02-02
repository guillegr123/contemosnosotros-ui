import React, { Component } from "react";
import axios from "axios";
import { Container, Header, Segment, Grid } from "semantic-ui-react";
import styled from "styled-components";

import background from "../../bg.jpg";

const MainGridContainer = styled(Grid)`
  padding-top: 10px !important;
  .white {
    color: white;
  }
  .segment {
    margin-top: 20px !important;
  }
`;

class App extends Component {
  baseUrl = "https://contemosnosotros-proxy.azurewebsites.net/";

  state = {
    imageUrl: "",
    imageToken: "",
    numberInputValue: "",
    inputDisabled: true
  };

  componentDidMount() {
    this.loadImage();
  }

  loadImage = () => {
    axios.get(`${this.baseUrl}/valida/`).then(res => {
      const imageToken = res.data.token;
      const imageUrl = `${this.baseUrl}/valida/image/${imageToken}`;
      this.setState({
        imageUrl,
        imageToken,
        numberInputValue: "",
        inputDisabled: false
      });
      this.nameInput.focus();
    });
  };

  sendNumber = value => {
    this.setState({ imageUrl: "", inputDisabled: true });
    axios
      .post(`${this.baseUrl}/valida/conteo`, {
        token: this.state.imageToken,
        value: this.state.numberInputValue
      })
      .then(res => {
        this.loadImage();
      });
  };

  handleKeyPress = event => {
    const keyCode = event.keyCode || event.which;

    if (keyCode === 13) {
      // Enter pressed
      this.sendNumber();

      return;
    }

    const keyValue = String.fromCharCode(keyCode);
    console.log("Event", event);
    console.log("keyCode", keyCode);
    console.log("keyValue", keyValue);
    if (!/[0-9]/.test(keyValue)) event.preventDefault();
  };

  handleChange = event => {
    this.setState({ numberInputValue: event.target.value });
  };

  handleButtonClick = () => {
    this.sendNumber();
  };

  render() {
    return (
      <React.Fragment>
        <MainGridContainer style={{ backgroundImage: `url(${background})` }}>
          <Container>
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
          <Container textAlign="center">
            <Segment>
              <Header as="h2">Ingresar actas</Header>
              <p>
                Digite únicamente los números (sin guiones) que observa en la
                imagen, si aparece vacio o solo guiones digite "0".
              </p>

              <p>
                Escriba el número en el cuadro de texto y luego presione "Enviar
                Acta" o la tecla [Enter].
              </p>

              <p>
                Escriba el número en el cuadro de texto y luego presione "Enviar
                Acta" o la tecla [Enter].
              </p>

              <p>
                <img src={this.state.imageUrl} />
              </p>

              <div className="ui massive input">
                <input
                  ref={input => {
                    this.nameInput = input;
                  }}
                  type="number"
                  value={this.state.numberInputValue}
                  placeholder="Digitar números de acta"
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleChange}
                  disabled={this.state.inputDisabled}
                />
              </div>

              <p>&nbsp;</p>

              <div>
                <button
                  className="ui massive primary button"
                  onClick={this.handleButtonClick}
                  disabled={this.state.inputDisabled}
                >
                  Enviar Acta
                </button>
              </div>
            </Segment>
          </Container>
        </MainGridContainer>
      </React.Fragment>
    );
  }
}

export default App;
