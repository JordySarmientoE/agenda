import AuthContainer from "../components/containers/AuthContainer";
import { BiSad } from "react-icons/bi";
import { colors } from "../utils";
import Button from "../components/buttons/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NotFoundText = styled.span`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  text-align: center;
`;

const InnerContent = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  align-self: center;
`;

const NotFound = () => {
  const navigation = useNavigate();

  const goHome = () => {
    navigation("/login");
  };

  return (
    <AuthContainer>
      <InnerContent>
        <BiSad color={colors.white} size="8em" />
        <NotFoundText>404</NotFoundText>
        <NotFoundText>Página no encontrada</NotFoundText>
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
  );
};

export default NotFound;
