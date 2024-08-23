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
        borderRadius: 10,
        margin: '5px',
        backgroundColor: 'white',
        borderColor: 'white'
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
    }
})

export default styles