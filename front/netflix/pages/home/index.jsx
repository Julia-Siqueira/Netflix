import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

// todas as telas precisam exportar alguma coisa
export default function Home(){
  // COMO O USESTATE FUNCIONA: a primeria variável do array é a que vai ser alterada, e a segunda é a que atualiza essa variável. O que define o estado inicial
  // é o que está dentro de parênteses. 
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
  const[token, setToken] = useState('')
  
  useEffect(() => {
    AsyncStorage.getItem('token')
        .then(
            (response) => {
                if(token != null){
                    console.log('Token Home: ', response)
                    setToken(response)
                }
            }
        )
        .catch(
            (error) =>{
                console.error('Erro ao salvar o Token: ', error)
            }
        )
}, [token])



  const capturar = async () =>{
    
      try{
        const response = await axios.get(
          'http://127.0.0.1:8000/api/movie/' + index,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        console.log(response.data)
        setFilmeG(response.data.title)
        setGeneroG(response.data.genre)
        setAnoG(response.data.year)
        setClassifG(response.data.age_rating)
        setIdiomaG(response.data.language)
        

    }catch{
      console.log(Error)
    
    } 
    
  }

  const postar = async () =>{
    try{
      const novoFilme = {
        title: filme, // essas são as variáveis que foram alteradas pelo UseState
        genre: genero,
        year: ano,
        age_rating: classif,
        language: idioma
      };

      await axios.post('http://127.0.0.1:8000/api/movieslist/', novoFilme) // ele posta dentro do JSON o novo filme já em formato JSON
      alert('Filme adicionado')
      setAno('')
      setClassif('')
      setFilme('')
      setGenero('')
      setIdioma('')
      


    }catch{
      console.log(Error)
      alert('Erro ao adicionar o filme');

    }
  };

  const atualizar = async () => {
    try{
      const response = await axios.put(
        'http://127.0.0.1:8000/api/movie/' + index,
        {
          title: filmeG, // pegando as variáveis que o GET trás
          genre: generoG,
          year: anoG,
          age_rating: classifG,
          language: idiomaG
        }
      )
      alert('Alterado com sucesso!')

    }catch{
      console.log(Error)
      alert('Erro ao atualizar ', Error)
    }
  }

  const deletar = async () => {
    try{
      const response = await axios.delete(
        'http://127.0.0.1:8000/api/movie/' + index,
      )
      alert('Deletado com sucesso!')

    }catch{
      console.log(Error)
      alert('Erro ao deletar ', Error)
    }
  }


  return(
    <View style={styles.container}>

      {/* ====================== A VIEW DO GET COMEÇA AQUI ========================= */}
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

          <Pressable style={styles.btn} onPress={capturar}>
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>GET</Text>
          </Pressable>

          <Pressable style={styles.btnP} onPress={atualizar}>
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>PUT</Text>
          </Pressable>

          <Pressable style={styles.btnD} onPress={deletar}>
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>DELETE</Text>
          </Pressable>

          </View>

          

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Filme</Text>
          <TextInput
            value={filmeG}
            style={styles.caixaGet}
            onChangeText={ (e) => setFilmeG(e)}
          />
          {/* mostrando qual é o filme e também pegando as informações para o PUT */}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Gênero</Text>
          <TextInput
            value={generoG}
            style={styles.caixaGet}
            onChangeText={ (e) => setGeneroG(e)}
          />
          {/* mostrando qual é o gênero do fime e também pegando as informações para o PUT*/}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Ano</Text>
          <TextInput
            value={anoG}
            style={styles.caixaGet}
            onChangeText={ (e) => setAnoG(e)}
          />
          {/* mostrando de qual ano é o filme e também pegando as informações para o PUT*/}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Classificação</Text>
          <TextInput
            value={classifG}
            style={styles.caixaGet}
            onChangeText={ (e) => setClassifG(e)}
          />
          {/* mostrando qual é a classificação do filme e também pegando as informações para o PUT*/}

          <Text style={{marginBottom: 10, fontWeight: 'bold'}}>Idioma</Text>
          <TextInput
            value={idiomaG}
            style={styles.caixaGet}
            onChangeText={ (e) => setIdiomaG(e)}
          />
          {/* mostrando qual é o idioma do filme e também pegando as informações para o PUT*/}
        </View>
        {/* ============================================================================================= */}
       

        {/* =========================== A VIEW DO POST COMEÇA AQUI ====================================== */}
        <View style={styles.post}>
          {/* AQUI A GENTE TÁ DEFININDO AS INFORMAÇÕES */}
          <Text>POST</Text>

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

          <Pressable style={styles.btnP} onPress={postar}>
            <Text style={{fontWeight: 'bold', alignItems:'center', color: 'white'}}>POST</Text>
          </Pressable>
          {/* ================================================================================= */}

        </View>
       
        </View>
      
    )
  
}

