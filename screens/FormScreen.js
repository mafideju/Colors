import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const FormScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View style={styles.container}>
            <Text>Nome</Text>
            <TextInput style={styles.input} value={name} onChangeText={(name) => setName(name)} />
            <Text>Senha</Text>
            <TextInput style={styles.input} value={pass} onChangeText={(pass) => setPass(pass)} />
            {pass && pass.length < 5 ? <Text style={styles.warn}>Senha Menor que o Permitido</Text> : null}
            <Text>Nome: {name}</Text>
            <Text>Senha: {pass}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 40,
        paddingBottom: 0,
        backgroundColor: 'rgb(83, 116, 73)',
        flex: 1,
        borderRadius: 5
    },
    input: {
        marginVertical: 15,
        padding: 3,
        borderBottomColor: '#111',
        borderBottomWidth: 1,
        backgroundColor: '#eee',
        borderRadius: 5 
    },
    warn: {
        backgroundColor: 'yellow',
        color: 'red',
        marginTop: -200,
        marginBottom: 200,
        padding: 5,
        borderRadius: 5 
    }
});

export default FormScreen;