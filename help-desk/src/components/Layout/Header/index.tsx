import { LogoutButton } from "../../Controllers/LogoutButton";
import { Container, Greeting, SubTitle, Title } from "./styles";
import auth from "@react-native-firebase/auth";

export function Header() {
    function handleLogout() {
        auth().signOut();
    }

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