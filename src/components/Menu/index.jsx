import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import logo from "../../cn2019-logo.png";

const Logo = props => (
  <img src={logo} className="ui small image" alt="Contemos Nosotros 2019" />
);

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: null };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed="top" inverted borderless>
        <Menu.Menu position="left">
          <Menu.Item icon>
            <Logo />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            name="inicio"
            active={activeItem === "inicio"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/resultados"
            name="resultados"
            active={activeItem === "resultados"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/manifiesto"
            name="manifiesto"
            active={activeItem === "manifiesto"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={NavLink}
            to="/faq"
            name="faq"
            active={activeItem === "faq"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
