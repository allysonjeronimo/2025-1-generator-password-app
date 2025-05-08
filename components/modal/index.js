import {View, Text, StyleSheet} from 'react-native'

export default function ModalPassword(){
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Password Modal</Text>
                <View style={styles.passwordContainer}>
                    <Text style={styles.passwordText}>1234567890</Text>
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
    }
})