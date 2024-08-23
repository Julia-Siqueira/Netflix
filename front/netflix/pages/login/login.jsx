import React, {useState, useEffect} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";

export default function Login(){
    const[user, setUser]=useState('')
    const[password, setPassword]=useState('')

    return(
        <View style={styles.container}>
            <View style={styles.caixinha}>
                <Text style={styles.texto}>Usuário</Text>
                <TextInput
                style={styles.caixa}
                value={user}
                onChangeText={(e) => setUser(e)}/>
                <Text style={styles.texto}>Senha</Text>
                <TextInput
                style={styles.caixa}
                value={password}
                onChangeText={(e) => setPassword(e)}/>
            </View>
        </View>
    )
}