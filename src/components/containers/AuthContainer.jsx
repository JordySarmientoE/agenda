import styled from "styled-components";
import { colors } from "../../utils/colors";

const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${colors.black_color};
  align-self: center;
  gap: 20px;
`;

export default AuthContainer;
