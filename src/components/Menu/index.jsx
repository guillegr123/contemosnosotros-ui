import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../images/logos/cn2019-logo.png";

const Logo = styled.div`
  width: 300px;
  height: 50px;
  background-image: url(${logo});
  background-size: cover;
`;

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 100;
  padding: 0 5em;
  width: 100vw;
  background: #005dad;
  color: #ffffff;
  height: 75px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-direction: center;
    padding: 0 1em;
    height: 120px;
  }
`;

const NavBarSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: ${props => props.position || "flex-start"};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    flex-direction: center;
    margin-top: 1em;
  }
`;

const NavbarItem = styled(NavLink)`
  color: #ffffff;
  padding: 0 1em 0.5em;

  &:hover {
    font-weight: bold;
    color: #ffffff;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid #ffffff;
  }

  @media (max-width: 768px) {
    padding: 0 1em 0.5em;
    margin-top: 1em !important;
  }
`;

const CollapseContainer = styled.div`
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Menu = props => (
  <NavbarContainer>
    <NavBarSection position="flex-start">
      <Logo />
    </NavBarSection>
    <NavBarSection position="flex-end">
      <CollapseContainer>
        <NavbarItem exact to="/">
          Inicio
        </NavbarItem>
        <NavbarItem exact to="/resultados">
          Resultados
        </NavbarItem>
        <NavbarItem exact to="/manifiesto">
          Manifiesto
        </NavbarItem>
        <NavbarItem exact to="/faq">
          FAQ
        </NavbarItem>
      </CollapseContainer>
    </NavBarSection>
  </NavbarContainer>
);

export default Menu;
