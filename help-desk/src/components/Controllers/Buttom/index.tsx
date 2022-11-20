import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonStyleProps, Container, Load, Title } from "./styles";

type Props = RectButtonProps & ButtonStyleProps & {
    title: string;
    isLoading?: boolean;
}

export function Buttom({ disabled, title, isLoading = false, ...rest }: Props) {
    return (
        <Container disabled={disabled} enabled={!isLoading} {...rest}>
            {isLoading ? <Load /> : <Title>{title}</Title>}
        </Container>
    );
}