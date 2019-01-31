import React, { Component } from "react";
import axios from "axios";
import "semantic-ui/dist/semantic.min.css";
import background from "../../bg.jpg";

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
        <div className="pusher">
          <div
            className="ui inverted vertical masthead center aligned segment"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="ui container">
              <h1 className="ui inverted header">Conteo electoral 2019</h1>
              <h3>
                Contemos Nosotros es una herramienta crowd-sourced o de
                colaboración abierta distribuida, totalmente anónima, capaz de
                verificar los conteos que se encuentran en las actas de las
                Juntas Electorales enviadas al TSE (Tribunal Supremo Electoral)
                de la República de El Salvador.
              </h3>
            </div>
            <div className="ui raised very padded container segment">
              <div className="text">
                <h2 className="ui header">Ingresar actas</h2>
                <p>
                  Digite únicamente los números (sin guiones) que observa en la
                  imagen, si aparece vacio o solo guiones digite "0".
                </p>

                <p>
                  Escriba el número en el cuadro de texto y luego presione
                  "Enviar Acta" o la tecla [Enter].
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
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
