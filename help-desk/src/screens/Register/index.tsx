import { KeyboardAvoidingView, Platform } from "react-native";
import { Lottie } from "../../components/Animations/Lottie";
import { BackButton, BackText, Container, SubTitle } from "./styles";
import registerAnimation from "../../assets/animations/register.json";
import { SignUpForm } from "../../components/Forms/SignUpForm";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

export function Register() {
    const theme = useTheme();

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Lottie source={registerAnimation} />
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
                <SignUpForm />

                <BackButton>
                    <MaterialIcons name="arrow-back" size={24} color={theme.COLORS.PRIMARY} />
                    <BackText>Eu já tenho uma conta</BackText>
                </BackButton>
            </KeyboardAvoidingView>
        </Container>
    );
}