import {View, Text, StyleSheet, Image, Pressable, Modal} from 'react-native'
import Slider from '@react-native-community/slider'
import { useState } from 'react'
import ModalPassword from './components/modal'

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

export default function App(){

  const [size, setSize] = useState(10)
  const [isModalVisible, setModalVisible] = useState(false)
  const [password, setPassword] = useState("")

  function generatePassword(){
    let value = ""
    for(let i = 0; i < size; i++){
      let randomNumber = Math.random() * charset.length
      value += charset.charAt(Math.floor(randomNumber))
    }
    setPassword(value)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/secure-icon.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.slideContainer}>
        <Slider
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
          style={{height: 30}}
          minimumValue={6}
          maximumValue={20}  
          thumbTintColor='#3f75fc'
          maximumTrackTintColor='#c7dceb'
          minimumTrackTintColor='#33aaff'
        />  
      </View>
      <Pressable style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText} selectable={false}>Gerar Senha</Text>
      </Pressable>
      <Modal visible={isModalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={password} onClose={ () => setModalVisible(false)}/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c8d5de'
  },
  logo:{
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 16
  },
  slideContainer:{
    width: 200,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginTop: 16,
    marginBottom: 16
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e6c8f'  
  },
  button:{
    backgroundColor: "#3f75fc",
    width: 200,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  }
})
