import { useState } from "react";
import { Button } from "../../Controllers/Button";
import { FooterButton } from "../../Controllers/FooterButton";
import { Input } from "../../Controllers/Input";
import { Form, Title, Footer } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function SignInForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation();

    function handleSignIn() {}

    function handleForgotPassword() {}

    return (
        <Form>
            <Title>Entrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
            <Button title="Entrar" onPress={handleSignIn} isLoading={isLoading} />

            <Footer>
                {/* @ts-ignore */}
                <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate("register")} />
                <FooterButton title="Esqueci a senha" icon="email" onPress={handleForgotPassword} />
            </Footer>
        </Form>
    );
}