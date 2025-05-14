import {View, Text, StyleSheet, Pressable} from 'react-native'

export default function ModalPassword({password, onClose}){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Password Modal</Text>
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>{password}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={onClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonSave]}>
                        <Text style={styles.buttonSaveText}>Salvar</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}  

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(24, 24, 24, 0.6)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content:{
        backgroundColor: "#fff",
        width: '80%',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5e6c8f',
        marginBottom: 16
    },
    passwordContainer:{
        backgroundColor: '#0e0e0e',
        width: '90%',
        borderRadius: 8,
        padding: 12 
    },
    passwordText:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
    },
    buttonContainer:{
        flexDirection: 'row',
        marginTop: 8,
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button:{
        flex: 1,
        padding: 8,
        alignItems: 'center'
    },
    buttonText:{
        fontWeight: 'bold'
    },
    buttonSave:{
        backgroundColor: '#3f75fc',
        borderRadius: 8,
    },
    buttonSaveText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})