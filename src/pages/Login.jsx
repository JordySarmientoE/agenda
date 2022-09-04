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

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setUser } = useContext(authContext);

  const login = (event) => {
    event.preventDefault();
    setUser({
      isLogged: true,
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
  };

  const register = (event) => {
    event.preventDefault();
    navigate("/register");
  };

  return (
    <AuthContainer>
      <IconLogin />
      <Form>
        <InputIcon
          innerRef={emailRef}
          placeholder="Username"
          type="email"
          icon={user}
        />
        <InputIcon
          placeholder="Password"
          type="password"
          icon={password}
          innerRef={passwordRef}
        />
        <Button theme="secondary" onClick={login}>
          LOGIN
        </Button>
        <Line />
        <Button theme="ternary" onClick={register}>
          REGISTRO
        </Button>
      </Form>
    </AuthContainer>
  );
};

export default Login;
