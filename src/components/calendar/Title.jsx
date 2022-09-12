import styled from "styled-components";
import { colors } from "../../utils";

const Title = styled.p`
    background-color: ${(props) =>
        props.today ? colors.black_color : colors.blue};
    color: white;
    text-align: center;
    border: 1px solid #4EA5D9;
    padding: 12px 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Title