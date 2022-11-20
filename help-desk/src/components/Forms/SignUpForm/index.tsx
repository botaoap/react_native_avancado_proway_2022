import { Button } from "../../Controllers/Button";
import { Input } from "../../Controllers/Input";
import { Form, Title } from "./styles";
import { useState } from "react";

export function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSignUp() {}

    return (
        <Form>
            <Title>Cadastrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
            <Button title="Cadastrar" isLoading={isLoading} onPress={handleSignUp} />
        </Form>
    )
}