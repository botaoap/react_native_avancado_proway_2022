import { Dimensions } from "react-native";
import styled from "styled-components"

export const Background = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    rigth: 0;
    width: ${Dimensions.get("window").width}px;
    heigth: ${Dimensions.get("window").height}px;
    background-color: rgba(0, 0, 0, 0.7);
`;