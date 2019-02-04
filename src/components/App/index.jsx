import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "../Menu";
import Main from "../Main";
import Manifest from "../Manifest";
import Results from "../Results";
import FAQ from "../FAQ";
import { GlobalStyle } from "../styles";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Menu />
        <React.Fragment>
          <Switch>
            <Route path="/resultados" component={Results} />
            <Route path="/manifiesto" component={Manifest} />
            <Route path="/faq" component={FAQ} />
            <Route path="/" component={Main} />
          </Switch>
        </React.Fragment>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
