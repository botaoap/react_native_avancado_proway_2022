import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    text: string;
    color:"blue" | "grey" | "purple";
    size: "small" |  "normal";
}

export function Button(props: Props) {
    let color = "";

    switch (props.color) {
        case "blue":

    }
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}> {props.text} </Text>
        </TouchableOpacity>
    )
}