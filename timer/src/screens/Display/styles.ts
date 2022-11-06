import { StyleSheet } from "react-native"
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    text: {
        fontSize: 72,
        marginHorizontal: 10,
        color: colors.text
    },
    subtext: {
        fontSize: 32
    }
});