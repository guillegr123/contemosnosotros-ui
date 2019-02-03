import { createGlobalStyle } from "styled-components";

import background from "../../bg.jpg";

const ImageBackground = createGlobalStyle`
#root {
  background-image: url(${background});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

export default ImageBackground;
