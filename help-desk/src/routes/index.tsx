import { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AuthRoutes } from "./AuthRoutes";
import auth from "@react-native-firebase/auth";
import { Home } from "../screens/Home";

export function Routes() {
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);

        return subscriber;
    }, []);

    return (
        <NavigationContainer>
            { user ? <Home /> : <AuthRoutes /> }
        </NavigationContainer>
    );
}