import React from "react"
import { CheckBox } from "../CheckBox"
import { IconButton, Text } from "react-native-paper"
import { useTodo } from "../../context/TodoContext"
import { styles } from "./styles"
import Animated, { Layout, LightSpeedInLeft, LightSpeedOutRight } from "react-native-reanimated"

export interface Todo {
    id: string,
    description: string,
    completed: boolean
}

type Props = {
    todo: Todo
}

export function TodoItem({ todo }: Props) {
    const { deleteTodo, toggleTodo } = useTodo();

    return (
        <Animated.View
            style={styles.container}
            entering={LightSpeedInLeft}
            layout={Layout.springify()}
            exiting={LightSpeedOutRight}
        >
            <CheckBox onCheck={() => toggleTodo(todo.id)} isChecked={todo.completed} text={todo.description} />

            <IconButton onPress={() => deleteTodo(todo.id)} size={26} style={{ backgroundColor: "black", marginEnd: 16 }} icon={"delete"} color="#fff" />
        </Animated.View>
    )
}