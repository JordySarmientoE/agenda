import AuthContainer from "../components/containers/AuthContainer";
import { BiSad } from "react-icons/bi";
import { colors } from "../utils";
import Button from "../components/buttons/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colorContext } from "../context/ColorContext";
import { useContext } from "react";
import ColorChange from "../components/buttons/ColorChange";

const NotFoundText = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: ${(props) => (props.mode ? colors.white : colors.black_color)};
  text-align: center;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const InnerContent = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  align-self: center;
`;

const NotFound = () => {
  const navigation = useNavigate();
  const { darkMode } = useContext(colorContext);

  const goHome = () => {
    navigation("/login");
  };

  return (
    <>
      <ColorChange />
      <AuthContainer mode={darkMode ? 1 : 0}>
        <InnerContent>
          <BiSad
            color={darkMode ? colors.white : colors.black_color}
            size="8em"
          />
          <NotFoundText mode={darkMode ? 1 : 0}>404</NotFoundText>
          <NotFoundText mode={darkMode ? 1 : 0}>
            Página no encontrada
          </NotFoundText>
          <Button
            theme="secondary"
            width="10em"
            height="2em"
            onClick={goHome}
            font_size="2em"
          >
            HOME
          </Button>
        </InnerContent>
      </AuthContainer>
    </>
  );
};

export default NotFound;
