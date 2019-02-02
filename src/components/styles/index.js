import { Grid } from "semantic-ui-react";
import styled from "styled-components";

import background from "../../bg.jpg";

export const MainGridContainer = styled(Grid)`
  padding-top: 30px !important;
  background-image: url(${background});

  .segment {
    margin-bottom: 30px !important;
  }
`;
