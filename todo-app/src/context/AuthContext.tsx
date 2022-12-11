import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthAPI } from "../api/todo/auth";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert, ToastAndroid } from "react-native";

type AuthContextType = {
    token: string;
    login: (unsername: string, password: string) => void;
    logout: VoidFunction;
};

const AuthContext = createContext(null!);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState("");

    async function login(username: string, password: string) {
        try {
            // O codigo que pode dar erro
            const { token } = await AuthAPI.login(username, password);

            await AsyncStorage.setItem("@token", token)

            setToken(token);

        } catch (error) {
            // O que vai acontecer quando der erro
            Alert.alert("Falha", "Falaha ao realizar o login error: " + error )
        }
    }
    
    async function logout() {
        try {
            await AsyncStorage.clear()

            setToken("")
        } catch (error) {
            Alert.alert("Falha", "Falha ao relazar o logout error: " + error)
        }
    }

    useEffect(() => {
        (async () => {
            try {
                const token = await AsyncStorage.getItem("@token");
                setToken(token)
            } catch(error) {
                ToastAndroid.show(
                    "Não foi possível recuperar o token do armazenamento", 
                    ToastAndroid.SHORT
                );
            }
        })();
    }, []);

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// Hooke para acessar as funcoes dentro dessa classe de outros lugares
export const useAuth = () => useContext(AuthContext);