import styled from "styled-components";
import { colors } from "../../utils";

const InputLeft = styled.input`
  background-color: ${colors.gray};
  padding: 10px 10px 10px 40px;
  border: none;
  border-radius: 2px;
  font-family: "Montserrat", sans-serif;
  width: 250px;

  :focus {
    outline-color: ${colors.strong_gray};
  }
`;

const IconLeft = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 7px;
  left: 10px;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const IconContainer = styled.div`
  width: 100%;
  position: relative;
`;

const InputIcon = ({ icon, placeholder, type, innerRef: ref, name, value, onChange }) => {

  let options = {
    placeholder,
    type,
    ref,
    name,
    value,
    onChange
  };

  Object.keys(options).forEach(key => {
    if (options[key] === undefined) {
      delete options[key];
    }
  });

  return (
    <IconContainer>
      <IconLeft src={icon} />
      <InputLeft {...options} />
    </IconContainer>
  );
};

export default InputIcon;
