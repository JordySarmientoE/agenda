import AuthContainer from "../components/containers/AuthContainer";
import IconLogin from "../components/images/IconLogin";
import Form from "../components/forms/Form";
import InputIcon from "../components/forms/InputIcon";
import password from "../assets/icons/password.ico";
import name from "../assets/icons/name.png";
import user from "../assets/icons/user.ico";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/buttons/Button";
import Line from "../components/Line";
import styled from "styled-components";
import { colors } from "../utils";
import ContainerInnerRight from "../components/containers/ContainerInnerRight";
import ContainerInnerLeft from "../components/containers/ContainerInnerLeft";
import RegisterImage from "../assets/img/login/register.png";

const RegisterTitle = styled.h3`
  color: ${colors.white};
  font-size: 24px;
  padding: 0 0 12px 0;
  margin: 0;
`;

const Register = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const register = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const login = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <AuthContainer>
      <ContainerInnerLeft image={RegisterImage}></ContainerInnerLeft>
      <ContainerInnerRight>
        <RegisterTitle>REGISTRO</RegisterTitle>
        <IconLogin />
        <Form>
          <InputIcon
            innerRef={nameRef}
            placeholder="Nombre"
            type="text"
            icon={name}
          />
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
          <Button theme="ternary" onClick={register}>
            REGISTRO
          </Button>
          <Line />
          <span style={{ textAlign: "center", color: colors.white }}>
            ¿Cuentas con una cuenta?
          </span>
          <Button theme="secondary" onClick={login}>
            LOGIN
          </Button>
        </Form>
      </ContainerInnerRight>
    </AuthContainer>
  );
};

export default Register;
