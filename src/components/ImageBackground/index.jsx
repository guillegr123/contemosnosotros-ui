import { createGlobalStyle } from "styled-components";

import background from "../../bg.jpg";

const ImageBackground = createGlobalStyle`
html {
  margin: 0px;
}

#root {
  background-image: url(${background});

  min-height: 100%;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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

export default ImageBackground;
