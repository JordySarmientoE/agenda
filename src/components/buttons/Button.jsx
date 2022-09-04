import styled from "styled-components";
import { theme } from "../../utils";

const Button = styled.button`
  background-color: ${(props) => getTheme(props.theme, "background")};
  font-family: "Montserrat", sans-serif;
  height: 30px;
  font-weight: bold;
  border: none;
  color: ${(props) => getTheme(props.theme, "color")};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  cursor: pointer;
  font-size: ${(props) => props.font_size};
`;

const getTheme = (tema, key) => {
  switch (tema) {
    case "secondary":
      return theme.secondary[key];
    case "ternary":
      return theme.ternary[key];
    default:
      return theme.primary[key];
  }
};

export default Button;
