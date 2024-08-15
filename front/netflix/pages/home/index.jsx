import React, { useState } from 'react';
import axios from 'axios';
import {Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './styles';

// todas as telas precisam exportar alguma coisa
export default function Home(){
  const[index, setIndex] = useState('')

  const[filmeG, setFilmeG] = useState('')
  const[generoG, setGeneroG] = useState('')
  const[anoG, setAnoG] = useState('')
  const[classifG, setClassifG] = useState('')
  const[idiomaG, setIdiomaG] = useState('')

  const[filme, setFilme] = useState('')
  const[genero, setGenero] = useState('')
  const[ano, setAno] = useState('')
  const[classif, setClassif] = useState('')
  const[idioma, setIdioma] = useState('')

  const capturar = async () =>{
    try{
        const response = await axios.get(

        )

    }catch{

    }
  }


  return(
    <View style={styles.container}>

      <View style={styles.get}>
        {/* AQUI ELE SÓ MOSTRA AS INFORMAÇÕES */}
          <Text>GET</Text>
          <View style={{flexDirection: 'row'}}>
          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>ID: </Text>
          <TextInput
            value={index}
            onChangeText={(e) => {setIndex(e)}}
            style={styles.caixaID}
          />
          <Pressable style={styles.btn}>
            
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>GET</Text>
          </Pressable>
          </View>
          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Filme</Text>
          <Text style={styles.caixaGet}>{filmeG}</Text> 
          {/* mostrando qual é o filme  */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Gênero</Text>
          <Text style={styles.caixaGet}>{generoG}</Text>
          {/* mostrando qual é o gênero do fime */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Ano</Text>
          <Text style={styles.caixaGet}>{anoG}</Text>
          {/* mostrando de qual ano é o filme */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Classificação</Text>
          <Text style={styles.caixaGet}>{classifG}</Text>
          {/* mostrando qual é a classificação do filme */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Idioma</Text>
          <Text style={styles.caixaGet}>{idiomaG}</Text>
          {/* mostrando qual é o idioma do filme */}
        </View>
       

        <View style={styles.post}>
          {/* AQUI A GENTE TÁ DEFININDO AS INFORMAÇÕES */}
          <Text>POST</Text>

          <View style={{flexDirection: 'row'}}>

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>ID: </Text>
          <TextInput
            value={index}
            onChangeText={(e) => {setIndex(e)}}
            style={styles.caixaID}
          />

          
          </View>

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Filme</Text>
          <TextInput
            value={filme}
            onChangeText={(e) => {setFilme(e)}}
            style={styles.caixaGet}
          />
          {/* enquanto a gente digita, ele vai mudando o nome do filme, pegando caractere por caractere */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Gênero</Text>
          <TextInput
            value={genero}
            onChangeText={(e) => {setGenero(e)}}
            style={styles.caixaGet}
          />
          {/* enquanto digitamos, ele vai definindo o gênero do filme */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Ano</Text>
          <TextInput
            value={ano}
            onChangeText={(e) => {setAno(e)}}
            style={styles.caixaGet}
          />
          {/* enquanto digitamos, ele vai defininfo o ano do filme */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Classificação</Text>
          <TextInput
            value={classif}
            onChangeText={(e) => {setClassif(e)}}
            style={styles.caixaGet}
          />
          {/* enquanto digitamos, ele vai definindo a classificação do filme */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Idioma</Text>
          <TextInput
            value={idioma}
            onChangeText={(e) => {setIdioma(e)}}
            style={styles.caixaGet}
          />
          {/* enquanto digitamos, ele vai definindo o idioma do filme */}

          <Pressable style={styles.btnP}>
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>POST</Text>
          </Pressable>

        </View>
       
        </View>
      
    )
  
}

