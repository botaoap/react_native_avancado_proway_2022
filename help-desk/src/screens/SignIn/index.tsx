import { KeyboardAvoidingView, Platform } from "react-native";
import { Lottie } from "../../components/Animations/Lottie";
import { Container, SubTitle } from "./styles";
import signInAnimation from "../../assets/animations/signin.json";
import { SignInForm } from "../../components/Forms/SignInForm";

export function SignIn() {
    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Lottie source={signInAnimation} />
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
                <SignInForm />
            </KeyboardAvoidingView>
        </Container>
    );
}