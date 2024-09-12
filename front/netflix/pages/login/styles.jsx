import {StyleSheet} from 'react-native'; 


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C2D3CD'
    },
    caixa:{
        borderWidth: 1,
        borderRadius: 5,
        margin: '5px',
        backgroundColor: 'white',
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        outlineWidth: 0
    },
    caixinha:{
        backgroundColor: '#AFBFC0',
        padding: '10px',
        borderRadius: '10px',
    },
    texto:{
        marginTop: '5px',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#3F4F50'
    },
    btn:{
        width: '100px',
        height: 25,
        backgroundColor: '#C2D3CD',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '15px',
        fontFamily: 'Arial',
        color: '#3F4F50',
        alignSelf: 'center',
        margin: '10px',
      },
    btnCad:{
        width: '130px',
        height: 25,
        backgroundColor: '#C2D3CD',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '15px',
        fontFamily: 'Arial',
        color: '#3F4F50',
        alignSelf: 'center',
        margin: '10px',
      },
      aic: {
        width: '30%'
      }
})

export default styles