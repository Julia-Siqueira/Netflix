import React, {useState, useEffect} from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'

export default function Login(){
    const[user, setUser]=useState('')
    const[password, setPassword]=useState('')
    const[token, setToken] = useState('')
    const[mensagem, setMensagem] = useState('')
    const navegacao = useNavigation()
    const validacao = () => {navegacao.navigate('Home')}

    useEffect(() => {
        AsyncStorage.setItem('token', token)
            .then(
                () => {
                    if(token != null){
                        console.log('Token salvo: ', token)
                    }
                }
            )
            .catch(
                (error) =>{
                    console.error('Erro ao salvar o Token: ', error)
                }
            )
    }, [])

    const logar = async () => {
        try{
            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/',
                {
                    username: user,
                    password: password
                }
            )
            console.log(response.data)
            // setMensagem(token)
        }
        catch(error){
            console.error(error)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.caixinha}>
                <Text style={styles.texto}>Usuário</Text>
                <TextInput
                style={styles.caixa}
                value={user}
                onChangeText={(e) => setUser(e)}
                />

                <Text style={styles.texto}>Senha</Text>
                <TextInput
                style={styles.caixa}
                value={password}
                onChangeText={(e) => setPassword(e)}
                secureTextEntry={true}
                />

                <Pressable style={styles.btn} onPress={logar}>
                    <Text>ENTRAR</Text>
                </Pressable>
            </View>
            
        </View>
    )
}