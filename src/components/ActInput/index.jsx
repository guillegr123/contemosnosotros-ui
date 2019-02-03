import React, { Component } from "react";
import axios from "axios";

class ActInput extends Component {
  //baseUrl = "http://localhost:5000";
  baseUrl = "";

  constructor(props) {
    super(props);

    this.baseUrl += "/api";
  }

  state = {
    imageUrl: "",
    imageToken: "",
    numberInputValue: "",
    inputDisabled: true
  };

  componentDidMount() {
    this.loadImage();
  }

  loadImage = token => {
    if (token) {
      this.updateImage(token);
      return;
    }

    axios.get(`${this.baseUrl}/token`).then(res => {
      const imageToken = res.data.token;
      this.updateImage(imageToken);
    });
  };

  updateImage = imageToken => {
    const imageUrl = `${this.baseUrl}/image/${imageToken}`;
    this.setState({
      imageUrl,
      imageToken,
      numberInputValue: "",
      inputDisabled: false
    });
    this.nameInput.focus();
  };

  sendNumber = () => {
    this.setState({ imageUrl: "", inputDisabled: true });
    axios
      .post(`${this.baseUrl}/token`, {
        token: this.state.imageToken,
        value: this.state.numberInputValue
      })
      .then(res => {
        this.loadImage(res.data ? res.data.token : undefined);
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
        <p>
          <img src={this.state.imageUrl} alt="Acta a digitar" />
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
      </React.Fragment>
    );
  }
}

export default ActInput;
