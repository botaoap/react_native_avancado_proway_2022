import styled from "styled-components";
import { StatusBar } from "react-native"

export const Container = styled.View`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    padding: 24px 24px 14px;
`;