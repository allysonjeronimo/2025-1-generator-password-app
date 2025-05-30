import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

    // Buscar os dados salvos no storage
    const getData = async (key) => {
        try{
            // retorna o item do storage
            const passwordsJson = await AsyncStorage.getItem(key)
            // retorna o item ou array vazio
            return JSON.parse(passwordsJson) || []
        }catch(error){
            console.log("Erro ao buscar dados no storage: ", error);
            return []
        }
    }

    // Salva dados no storage
    const saveData = async (key, value) => {
        try{
            // busca itens
            let passwords = await getData(key)
            // adiciona o novo item
            passwords.push(value)
            // atualiza no storage
            await AsyncStorage.setItem(key, JSON.stringify(passwords))
        }catch(error){
            console.log("Erro ao salvar dados no storage: ", error)
        }
    }

    // Remover dados do storage
    const removeData = async (key, data) => {
        try{
            // busca itens
            let passwords = await getData(key)
            // remove o item do array passwords
            let updatedPasswords = passwords.filter(item => item !== data)  
            // atualiza o storage com o array atualizado
            await AsyncStorage.setItem(key, JSON.stringify(updatedPasswords))
            return updatedPasswords
        }catch(error){
            console.log("Erro ao remover dados do storage: ", error)
        }
    }

    return {
        getData,
        saveData,
        removeData
    }
}

export default useStorage