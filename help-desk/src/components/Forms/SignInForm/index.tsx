import React, { useState } from "react";
import { Buttom } from "../../Controllers/Buttom";
import { FooterButton } from "../../Controllers/FooterButton";
import { Input } from "../../Controllers/Input";
import { Form, Title, Footer } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../routes/AuthRoutes";
import { Error } from "./styles"
import * as yup from "yup"
import { Formik } from "formik";

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, "SignIn">;

const loginValidationSchema = yup.object({
    email: yup
        .string()
        .email("Email precisa ser válido")
        .required("O e-mail é obrigatório"),
    password: yup
        .string()
        .required("A senha é obrigatória")
});

const initialValues = {
    email: "",
    password: ""
};

export function SignInForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation<SignInScreenNavigationProp>();

    function handleSignIn() {}

    function handleForgotPassword() {}

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSignIn}
            validationSchema={loginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid }) => (
                <Form>
                    <Title>Entrar</Title>
                    <Input placeholder="E-mail" onChangeText={handleChange("email")} onBlur={handleBlur("email")} value={values.email} />
                    {
                        touched.email && !!errors.email &&
                        <Error>{errors.email}</Error>
                    }
                    <Input placeholder="Senha" secureTextEntry onChangeText={handleChange("password")} onBlur={handleBlur("password")} value={values.password} />
                    {
                        touched.password && !!errors.password &&
                        <Error>{errors.password}</Error>
                    }
                    <Buttom title="Entrar" onPress={handleSignIn} isLoading={isLoading} disabled={isValid}/>
                    
                    <Footer>
                        <FooterButton title="Criar conta" icon="person-add" onPress={() => navigation.navigate("Register")} />
                        <FooterButton title="Esqueci a senha" icon="email" onPress={handleForgotPassword} />
                    </Footer>
                </Form>
            )}
        </Formik>
    );
}