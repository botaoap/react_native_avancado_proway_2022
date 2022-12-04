import React from "react"
import { View } from "react-native"
import { CheckBox } from "../CheckBox"
import { IconButton, Text } from "react-native-paper"
import { useTodo } from "../../context/TodoContext"
import { styles } from "./styles"
import Animated, { Layout, LightSpeedInLeft, LightSpeedInRight } from "react-native-reanimated"

export interface Todo {
    id: string,
    description: string,
    completed: boolean
}

type Props = {
    todo: Todo
}

export function TodoItem({ todo }: Props) {
    const { deleteTodo } = useTodo();

    return (
        <Animated.View
            style={styles.container}
            entering={LightSpeedInLeft}
            layout={Layout.springify()}
            exiting={LightSpeedInRight}
        >
            <Text style={styles.descriptionText}>{todo.description}</Text>
            <IconButton onPress={() => deleteTodo(todo.id)} size={32} style={{ backgroundColor: "red"}} icon={"delete"} color="#fff"/>
        </Animated.View>
    )
}