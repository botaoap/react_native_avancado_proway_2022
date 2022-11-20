import { TextInput, TextInputProps } from "react-native"
import styled from "styled-components/native"

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => {
    placeHolderTextColor: theme.COLORS.SUBTEXT
})`
    width: 100%;
    heigth: 100px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 12px;
    font-size: 14px;
    padding: 7px 0 7px 20px;
    margin-bottom: 16px;
    fot-family: ${({ theme }) => theme.FONTS.TEXT};
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    color: ${({ theme }) => theme.COLORS.TEXT};
`;

