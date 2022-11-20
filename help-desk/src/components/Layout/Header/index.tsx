import { LogoutButton } from "../../Controllers/LogoutButton";
import { Container, Greeting, SubTitle, Title } from "./styles";

export function Header() {
    function handleLogout() {}

    return (
        <Container>
            <Greeting>
                <Title>HelpDesk</Title>
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
            </Greeting>

            <LogoutButton onPress={handleLogout} />
        </Container>
    );
}