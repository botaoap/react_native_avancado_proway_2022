import React from "react"
import { CheckBox } from "../CheckBox"
import { IconButton, Text } from "react-native-paper"
import { useTodo } from "../../context/TodoContext"
import { styles } from "./styles"
import Animated, { Layout, LightSpeedInLeft, LightSpeedInRight, LightSpeedOutRight } from "react-native-reanimated"

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
            <CheckBox onCheck={() => toggleTodo(todo.id)} isChecked={todo.completed} />
            <Text style={styles.descriptionText}>{todo.description}</Text>
            <IconButton onPress={() => deleteTodo(todo.id)} size={32} style={{ backgroundColor: "red"}} icon={"delete"} color="#fff"/>
        </Animated.View>
    )
}