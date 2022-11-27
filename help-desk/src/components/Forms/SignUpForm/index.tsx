import { Button } from "../../Controllers/Buttom";
import { Input } from "../../Controllers/Input";
import { Form, Title } from "./styles";
import { useState } from "react";
import auth from "@react-native-firebase/auth"
import { Alert } from "react-native";

export function SignUpForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleSignUp() {
        setIsLoading(true);
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => Alert.alert("Sucesso", "Usuario criado com sucesso!"))
            .catch(() => Alert.alert("Falha", "Nao foi possivel criar usuario"))
            .finally(() => setIsLoading(false))
    }

    return (
        <Form>
            <Title>Cadastrar</Title>
            <Input placeholder="E-mail" onChangeText={setEmail} />
            <Input placeholder="Senha" secureTextEntry onChangeText={setPassword} />
            <Button title="Cadastrar" isLoading={isLoading} onPress={handleSignUp} />
        </Form>
    )
}