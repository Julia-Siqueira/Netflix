import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, Button, Alert, Pressable } from 'react-native';

// todas as telas precisam exportar alguma coisa
export default function App(){
  const[index, setIndex] = useState('')
  const[filme, setFilme] = useState('')
  const[genero, setGenero] = useState('')
  const[ano, setAno] = useState('')
  const[classif, setClassif] = useState('')
  const[idioma, setIdioma] = useState('')



  return(
    <View style={styles.container}>

      <View style={styles.get}>
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
          <Text style={styles.caixaGet}>{filme}</Text>

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Gênero</Text>
          <Text style={styles.caixaGet}>{genero}</Text>

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Ano</Text>
          <Text style={styles.caixaGet}>{ano}</Text>

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Classificação</Text>
          <Text style={styles.caixaGet}>{classif}</Text>

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Idioma</Text>
          <Text style={styles.caixaGet}>{idioma}</Text>
        </View>
       

        <View style={styles.post}>
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

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Gênero</Text>
          <TextInput
            value={genero}
            onChangeText={(e) => {setGenero(e)}}
            style={styles.caixaGet}
          />

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Ano</Text>
          <TextInput
            value={ano}
            onChangeText={(e) => {setAno(e)}}
            style={styles.caixaGet}
          />

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Classificação</Text>
          <TextInput
            value={classif}
            onChangeText={(e) => {setClassif(e)}}
            style={styles.caixaGet}
          />

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Idioma</Text>
          <TextInput
            value={idioma}
            onChangeText={(e) => {setIdioma(e)}}
            style={styles.caixaGet}
          />
          <Pressable style={styles.btnP}>
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>POST</Text>
          </Pressable>

        </View>
       
        </View>
      
    )
  
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F5F6',
    flex: 1,
    padding: 20,
  },
  get:{
    backgroundColor: '#DCD6F7',
    flex: 1,
    padding: 20
  },
  post:{
    backgroundColor: '#D6E5E3',
    flex: 1,
    padding: 20
  },
  caixaGet:{
    height: 25,
    borderRadius: 5,
    padding:5,
    backgroundColor: 'white',
    width: '90%',
    marginBottom: 10,

    
  },
  caixaID:{
    width: '10%',
    height: 30,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    borderColor: 'white',
    marginBottom: 10
  },
  btn:{
    width: '5%',
    height: 30,
    backgroundColor: '#94A1DB',
    marginLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnP:{
    width: '5%',
    height: 30,
    backgroundColor: '#5F958E',
    marginLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
