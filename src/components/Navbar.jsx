import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authContext } from "../context/AuthContext";
import { colors, device } from "../utils";
import Button from "./buttons/Button";
import { BiLogOut } from "react-icons/bi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { colorContext } from "../context/ColorContext";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
  background-color: ${(props) =>
    props.mode ? colors.black_color : colors.black_grey};
  flex-wrap: wrap;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;

const UserOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: row;
`;

const TitleUser = styled.span`
  text-transform: capitalize;
`;

const Title = styled.h3`
  font-size: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Ul = styled.ul`
  list-style: none;
  gap: 20px;
  padding: 0;
  display: inherit;
`;

const IconMenu = styled.span`
  display: none;

  @media ${device.laptop} {
    display: block;
  }
`;

const ColorContainer = styled.span`
  width: 35px;
  height: 35px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const { user, setUser } = useContext(authContext);
  const [shown, setShown] = useState(true);
  const { darkMode, setDarkMode } = useContext(colorContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  const logOut = (event) => {
    event.preventDefault();
    setUser({
      data: null,
      isLogged: false,
    });
    navigate("/login");
  };

  const showMenu = () => {
    setShown(!shown);
  };

  window.addEventListener("resize", () => {
    if (!shown && window.innerWidth >= 1024) {
      setShown(true);
    }
  });

  const changeColor = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Nav mode={darkMode ? 1 : 0}>
      <Title>
        <Link
          to="/"
          style={{
            textDecorationLine: "none",
            color: darkMode ? colors.white : colors.black_color,
          }}
        >
          Mi Agenda
        </Link>
        <IconMenu>
          {shown ? (
            <MdExpandLess size="1.2em" cursor="pointer" onClick={showMenu} />
          ) : (
            <MdExpandMore size="1.2em" cursor="pointer" onClick={showMenu} />
          )}
        </IconMenu>
      </Title>
      {shown && (
        <Ul shown={shown}>
          <li>
            <Link
              to="/"
              style={{
                textDecorationLine: "none",
                color: darkMode ? colors.white : colors.black_color,
                fontWeight: "bold",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              style={{
                textDecorationLine: "none",
                color: darkMode ? colors.white : colors.black_color,
              }}
            >
              Calendario
            </Link>
          </li>
        </Ul>
      )}
      {shown && (
        <UserOptions shown={shown}>
          {user.isLogged && <TitleUser>{user.data?.email}</TitleUser>}
          {darkMode ? (
            <ColorContainer theme={darkMode ? 1 : 0}>
              <MdOutlineLightMode
                size="2em"
                onClick={changeColor}
                color={colors.black_color}
              />
            </ColorContainer>
          ) : (
            <ColorContainer theme={darkMode ? 1 : 0}>
              <MdOutlineDarkMode
                size="2em"
                onClick={changeColor}
                color={colors.black_color}
              />
            </ColorContainer>
          )}
          {user.isLogged ? (
            <Button theme="secondary" onClick={logOut}>
              <BiLogOut size="2em" />
            </Button>
          ) : (
            <Button theme="secondary" onClick={login}>
              LOGIN
            </Button>
          )}
        </UserOptions>
      )}
    </Nav>
  );
};

export default Navbar;
