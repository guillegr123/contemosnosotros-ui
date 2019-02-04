import React, { Component } from "react";
import { Loader } from "semantic-ui-react";
import ProgressiveImage from "react-progressive-image";
import styled from "styled-components";
import axios from "axios";

const ActImage = styled.div`
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  img {
    max-width: 100%;
  }
`;

const ImagePlaceHolder = styled.div`
  display: inline-block;
  height: 100px;
  width: 300px;
  background: #c0c0c0;
`;

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
        <ActImage>
          <ProgressiveImage src={this.state.imageUrl}>
            {(src, loading) => {
              return loading ? (
                <ImagePlaceHolder>
                  <Loader active />
                </ImagePlaceHolder>
              ) : (
                <img src={src} alt="Imagen de número de acta" />
              );
            }}
          </ProgressiveImage>
        </ActImage>

        <div className="ui massive input">
          <input
            ref={input => {
              this.nameInput = input;
            }}
            type="number"
            value={this.state.numberInputValue}
            placeholder="Digite número acá"
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
            Enviar Acta <Loader active={this.state.inputDisabled} />
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default ActInput;
