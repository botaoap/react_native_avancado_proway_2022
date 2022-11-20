import { Container, FilterProps, Title } from "./style";
import { TouchableOpacityProps } from "react-native";

type Props = FilterProps & TouchableOpacityProps & {
    title: string;
}

export function Filter({ title, backgroundColor, ...rest }: Props) {
    return (
        <Container backgroundColor={backgroundColor} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}