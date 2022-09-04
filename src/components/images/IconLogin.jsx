import styled from "styled-components";
import loginIcon from "../../assets/img/login/login.png";

const LoginImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 30px;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const IconLogin = () => {
  return <LoginImage src={loginIcon} />;
};

export default IconLogin;
