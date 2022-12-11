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
            <View style={{ flex: 1 }}>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo.id} />
                    ))
                }
            </View>
            <View style={styles.form} >
                <TodoForm />
            </View>
        </View>
    )
}