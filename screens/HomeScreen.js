import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                title="Cores"
                color='#777'
                onPress={() => navigation.navigate('Cores')}
            />
            <Button
                style={styles.button}
                title="Quadrados"
                color='#555'
                onPress={() => navigation.navigate('Quadrados')}
            />
            <Button
                style={styles.button}
                title="Formulário"
                color='#333'
                onPress={() => navigation.navigate('Formulário')}
            />
            <Button
                style={styles.button}
                title="Boxes"
                color='#111'
                onPress={() => navigation.navigate('Boxes')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 40,
        backgroundColor: 'rgb(83, 116, 73)',
        flex: 1,
        borderRadius: 5
    }
});

export default HomeScreen;