import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { authContext } from "../context/AuthContext";

const Nav = styled.nav`
  background-color: #e36735;
`;

const Li = styled.li`
  background-color: cadetblue;
`;

const Navbar = () => {
  const { user } = useContext(authContext);

  return (
    <div>
      <Nav>
        <ul style={{ margin: 0 }}>
          <Li>
            <Link to="/login">Login</Link>
          </Li>
          <Li>Link</Li>
          <Li>Link</Li>
          <Li>Link</Li>
          <Li>{user.data?.email ?? "No login"}</Li>
        </ul>
      </Nav>
    </div>
  );
};

export default Navbar;
