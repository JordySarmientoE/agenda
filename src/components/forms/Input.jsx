import styled from "styled-components";
import { colors } from "../../utils";

const Input = styled.input`
  background-color: ${colors.gray};
  padding: 10px;
  border: none;
  border-radius: 2px;
  font-family: "Montserrat", sans-serif;
  width: calc(100% - 20px);

  :focus {
    outline-color: ${colors.strong_gray};
  }
`;

export default Input;
