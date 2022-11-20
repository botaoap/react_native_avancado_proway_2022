import React, { useState } from "react";
import { Input } from "../../Controllers/Input";
import { Buttom } from "../../Controllers/Buttom"
import { Form, Title } from "./styles";
import { TextArea } from "../../Controllers/TextArea";

export function OrderForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [patrimony, setPatrimony] = useState("");

    function handleNewOrder() {}

    return (
        <Form>
            <Title>Novo chamado</Title>
                <Input placeholder="Número do Patrimonio" onChangeText={setPatrimony} />
                <TextArea placeholder="Descrição" onChangeText={setDescription} />
                <Buttom title="Enviar chamado" isLoading={isLoading} onPress={handleNewOrder} />
        </Form>
    )
}