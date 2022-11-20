import { KeyboardAvoidingView, Platform } from "react-native";
import { Lottie } from "../../components/Animations/Lottie";
import { BackButton, BackText, Container, SubTitle } from "./styles";
import registerAnimation from "../../assets/animations/register.json";
import { SignUpForm } from "../../components/Forms/SignUpForm";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../routes/AuthRoutes";
import { useNavigation } from "@react-navigation/native";

type RegisterScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "Register">;

export function Register() {
    const theme = useTheme();

    const navigation = useNavigation<RegisterScreenNavigationProp>()

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <Lottie source={registerAnimation} />
                <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
                <SignUpForm />

                <BackButton onPress={() => navigation.push("SignIn")}>
                    <MaterialIcons name="arrow-back" size={24} color={theme.COLORS.PRIMARY} />
                    <BackText>Eu já tenho uma conta</BackText>
                </BackButton>
            </KeyboardAvoidingView>
        </Container>
    );
}