import React from "react";
import { withRouter } from "react-router-dom";

const Menu = withRouter(props => <InnerMenu {...props} />);

const InnerMenu = props => {
  const { pathname } = props.location;
  const routes = [
    {
      text: "Inicio",
      className: "item",
      path: "/"
    },
    {
      text: "Resultados",
      className: "item",
      path: "/resultados"
    },
    {
      text: "Manifiesto",
      className: "item",
      path: "/manifiesto"
    },
    {
      text: "FAQ",
      className: "item",
      path: "/faq"
    }
  ];

  routes.forEach(route => {
    if (route.path === pathname) {
      route.className += " active";
    }
  });

  return (
    <div className="ui top borderless hidden inverted menu">
      <div className="ui container">
        <h1 className="header item">Elecciones 2019</h1>
        <div className="right item">
          <div className="ui secondary inverted pointing menu">
            {routes.map((route, i) => (
              <a
                key={"menu-item-" + i.toString()}
                href={route.path}
                className={route.className}
              >
                {route.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
