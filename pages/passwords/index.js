
import {View, Text, StyleSheet} from 'react-native'
import useStorage from '../../hooks/useStorage'

export function Passwords(){

    const {getData} = useStorage()

    console.log(getData("password"))

    return (
        <View>
            <Text>Minhas Senhas</Text>
        </View>
    )
}

const stylesheets = StyleSheet.create({

})