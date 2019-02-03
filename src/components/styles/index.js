import { Grid } from "semantic-ui-react";
import styled, { createGlobalStyle } from "styled-components";

export const MainGridContainer = styled(Grid)`
  padding-top: 2em !important;
  padding-bottom: 3em !important;
  margin: 0px !important;

  .segment {
    margin-bottom: 30px !important;
  }
`;

export const GlobalStyle = createGlobalStyle`
html {
  margin: 0px;
}

#root {
  min-height: 100%;
  position: relative;
}

.ui.segment.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  text-align: center;
}
`;
