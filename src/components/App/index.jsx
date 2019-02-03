import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Menu from "../Menu";
import Main from "../Main";
import Manifest from "../Manifest";
import Results from "../Results";
import FAQ from "../FAQ";

class App extends Component {
  componentDidMount() {
    document.title = "Contemos Nosotros 2019";
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <React.Fragment>
          <Switch>
            <Route path="/resultados" component={Results} />
            <Route path="/manifiesto" component={Manifest} />
            <Route path="/faq" component={FAQ} />
            <Route path="/" component={Main} />
          </Switch>
        </React.Fragment>
        <div class="ui inverted vertical footer segment form-page">
          <div class="ui container">Contemos Nosotros 2019</div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
