import React, { useState } from "react"
import { FlatList, Text, View } from "react-native"
import { CheckBox } from "../../components/CheckBox"
import { TodoForm } from "../../components/TodoForm"
import { TodoItem } from "../../components/TodoItem"
import { useTodo } from "../../context/TodoContext"
import { styles } from "./styles"


export function HomeScreen() {
    const { todos } = useTodo()

    return (
        <View style={styles.container}>
            <Text>Lista de tarefas</Text>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoItem todo={item} /> }
                keyExtractor={(item) => item.id}
            />
            <TodoForm />
        </View>
    )
}