import {StyleSheet} from 'react-native'; 
// o StyleSheet tá entre parênteses porque ele é um componente do React Native

// só os estilos
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
      padding: 10,
      outlineWidth: 0
  
      
    },
    caixaID:{
      width: '10%',
      height: 30,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: 'white',
      borderColor: 'white',
      marginBottom: 10,
      padding: 10,
      outlineWidth: 0
      
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
    btnD:{
      width: '5%',
      height: 30,
      backgroundColor: '#d4778e',
      marginLeft: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  
  export default styles // é default porque é só o styles
