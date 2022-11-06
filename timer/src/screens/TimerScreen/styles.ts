import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";

export const styles = StyleSheet.create({
    progressBarContainer: {
        marginTop: 40,
        flex: 1
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 30
    },
    text: {
        color: colors.buttonGrey,
        fontSize: 50,
    }
});