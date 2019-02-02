import React from "react";
import { NavLink } from "react-router-dom";

const Menu = props => (
  <div className="ui top borderless hidden inverted menu">
    <div className="ui container">
      <h1 className="header item">Elecciones 2019</h1>
      <div className="right item">
        <div className="ui secondary inverted pointing menu">
          <NavLink className="item" exact to="/">
            Inicio
          </NavLink>
          <NavLink className="item" to="/resultados">
            Resultados
          </NavLink>
          <NavLink className="item" to="/manifiesto">
            Manifiesto
          </NavLink>
          <NavLink className="item" to="/faq">
            FAQ
          </NavLink>
        </div>
      </div>
    </div>
  </div>
);

export default Menu;
