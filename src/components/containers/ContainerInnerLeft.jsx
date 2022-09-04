import styled from "styled-components";
import { device } from "../../utils";

const ContainerInnerLeft = styled.div`
  width: 30%;
  height: 80%;
  background: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.laptop} {
    display: none;
  }
`;

export default ContainerInnerLeft;
