import { useState } from "react";
import { Button } from "../../Controllers/Buttom";
import { FooterButton } from "../../Controllers/FooterButton";
import { Input } from "../../Controllers/Input";
import { Form, Title, Footer } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../routes/AuthRoutes";

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignIn">;

export function SignInForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation<SignInScreenNavigationProp>();

    function handleSignIn() {}

    function handleForgotPassword() {}

    return (
        <Form>
            <Title>Entrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
            <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

            <Footer>
                <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate("Register")} />
                <FooterButton title="Esqueci a senha" icon="email" onPress={handleForgotPassword} />
            </Footer>
        </Form>
    );
}