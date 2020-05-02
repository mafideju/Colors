import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View style={styles.container}>
            <Button title="Nova Cor" onPress={() => setColors([...colors, RGB()])} />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => (
                    <View style={{ height: 40, width: 230, backgroundColor: item }}>
                        <Text style={{ fontSize: 10, color:'#bbb' }}>{item}</Text>
                    </View>
                )}
            />
        </View>
    )
};

const RGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 8,
    },
    container: {
        margin: 5,
        padding: 40,
        paddingBottom: 0,
        backgroundColor: 'rgb(83, 116, 73)',
        flex: 1,
        borderRadius: 5
    }
});

export default ColorScreen;