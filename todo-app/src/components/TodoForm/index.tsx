import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useAuth } from "../../context/AuthContext";
import { useTodo } from "../../context/TodoContext";
import { styles } from "./styles";

export function TodoForm() {
    const [description, setDescription] = useState("");
    const { addTodo } = useTodo();
    const { logout } = useAuth();

    function handleAddTodo() {
        if (!description.trim()) {
            Alert.alert("Falha", "Descrição invalida");
            return;
        }
        addTodo(description);
    }

    function handleLogout() {
        logout()
        return 
    }

    return (
        <View>
            <View style={styles.description}>
                <TextInput placeholder="Descrição" mode="outlined" value={description} onChangeText={setDescription} />
            </View>
            <View style={styles.addButton}>
                <Button icon="plus" onPress={handleAddTodo} mode="contained">Adicionar</Button>
            </View>
            <View style={styles.logoutButton}>
                <Button icon="logout" onPress={handleLogout} mode="contained">Deslogar</Button>
            </View>
        </View>
    )
}