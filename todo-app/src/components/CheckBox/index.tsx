import React, { useEffect, useRef, useState, ReactNode } from "react";
import { TouchableOpacity, Text, StyleProp, TextStyle } from "react-native";
import Lottie from "lottie-react-native"
import { styles } from "./styles";

type Props = {
    onCheck: VoidFunction,
    isChecked: boolean,
    text?: string;
    textStyle?: StyleProp<TextStyle>;
}

export function CheckBox({ onCheck, isChecked, text, textStyle }: Props) {
    const animation = useRef<any>(null);
    const firstRun = useRef(true)
    
    
    useEffect(() => {
        if (firstRun.current) {
            if(!isChecked) {
                animation.current.play(0,0);
            } else {
                animation.current.play(30, 30);
            }
        } else {
            if(!isChecked) {
                animation.current.play(30,0);
            } else {
                animation.current.play(0, 30);
            }
        }
    }, [isChecked])

    function handleChecked() {
        firstRun.current = false
        onCheck()
    }

    return(
        <TouchableOpacity style={styles.checkbox} onPress={handleChecked}>
            <Lottie
                source={require("../../assets/checkbox.json")}
                autoPlay={false}
                loop={false}
                resizeMode="cover"
                ref={animation}
                style={{ height: 36, width: 36 }}
            />
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    )
}