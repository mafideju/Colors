import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ colorName, onIncrease, onDecrease }) => {
    // const [] = useState();

    return (
        <View>
            <Text>{colorName}</Text>
            <Button title={`Aumentar ${colorName}`} onPress={() => onIncrease()} />
            <Button title={`Diminuir ${colorName}`} onPress={() => onDecrease()} />
        </View>
    )
};

const styles = StyleSheet.create();

export default ColorCounter;