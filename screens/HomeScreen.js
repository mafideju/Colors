import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                style={styles.button}
                title="Cores"
                color='#555'
                onPress={() => navigation.navigate('Cores')}
            />
            <Button
                style={styles.button}
                title="Quadrados"
                color='#333'
                onPress={() => navigation.navigate('Quadrados')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;