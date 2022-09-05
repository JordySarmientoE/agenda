import Form from "../components/forms/Form";
import InputIcon from "../components/forms/InputIcon";
import password from "../assets/icons/password.ico";
import user from "../assets/icons/user.ico";
import Button from "../components/buttons/Button";
import Line from "../components/Line";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthContainer from "../components/containers/AuthContainer";
import { authContext } from "../context/AuthContext";
import IconLogin from "../components/images/IconLogin";
import styled from "styled-components";
import { colors } from "../utils";
import LoginImage from "../assets/img/login/login.svg";
import ContainerInnerLeft from "../components/containers/ContainerInnerLeft";
import ContainerInnerRight from "../components/containers/ContainerInnerRight";
import { colorContext } from "../context/ColorContext";
import ColorChange from "../components/buttons/ColorChange";

const LoginTitle = styled.h3`
  color: ${(props) => (props.mode ? colors.white : colors.black_color)};
  font-size: 24px;
  padding: 0 0 12px 0;
  margin: 0;
`;

const RegisterText = styled.span`
  text-align: center;
  color: ${(props) => (props.mode ? colors.white : colors.black_color)};
`;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setUser } = useContext(authContext);
  const { darkMode } = useContext(colorContext);

  const login = (event) => {
    event.preventDefault();
    setUser({
      isLogged: true,
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
    navigate("/");
  };

  const register = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <>
      <ColorChange />
      <AuthContainer mode={darkMode ? 1 : 0}>
        <ContainerInnerLeft image={LoginImage}></ContainerInnerLeft>
        <ContainerInnerRight>
          <LoginTitle mode={darkMode ? 1 : 0}>LOGIN</LoginTitle>
          <IconLogin />
          <Form>
            <InputIcon
              innerRef={emailRef}
              placeholder="Correo"
              type="email"
              icon={user}
            />
            <InputIcon
              placeholder="Contraseña"
              type="password"
              icon={password}
              innerRef={passwordRef}
            />
            <Button theme="secondary" onClick={login}>
              LOGIN
            </Button>
            <Line />
            <RegisterText mode={darkMode ? 1 : 0}>
              ¿No cuentas con una cuenta?
            </RegisterText>
            <Button theme="ternary" onClick={register}>
              REGISTRO
            </Button>
          </Form>
        </ContainerInnerRight>
      </AuthContainer>
    </>
  );
};

export default Login;
