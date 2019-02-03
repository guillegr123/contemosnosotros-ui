import React from "react";
import { Dropdown } from "semantic-ui-react";

export default ({ data, placeholder = "Todos" }) => (
  <Dropdown
    placeholder={placeholder}
    search
    selection
    options={data}
    onChange={(e, { name, value }) => console.log(name, value)}
  />
);
