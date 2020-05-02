import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View>
            <Button title="Nova Cor" onPress={() => setColors([...colors, RGB()])} />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({ item }) => (
                    <View style={{ height: 100, width: 100, backgroundColor: item }}>
                        <Text style={{ fontSize: 10, color:'#666' }}>{item}</Text>
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
    }
});

export default ColorScreen;