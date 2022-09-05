import { useContext } from "react";
import { colorContext } from "../../context/ColorContext";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import styled from "styled-components";

const ColorContainer = styled.span`
  position: absolute;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.theme ? "1px solid black" : "none")};
`;

const ColorChange = () => {
  const { darkMode, setDarkMode } = useContext(colorContext);

  const changeColor = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {darkMode ? (
        <ColorContainer theme={darkMode ? 1 : 0}>
          <MdOutlineLightMode size="3em" onClick={changeColor} />
        </ColorContainer>
      ) : (
        <ColorContainer theme={darkMode ? 1 : 0}>
          <MdOutlineDarkMode size="3em" onClick={changeColor} />
        </ColorContainer>
      )}
    </>
  );
};

export default ColorChange;
