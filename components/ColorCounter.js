import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ colorName }) => {
    // const [] = useState();

    return (
        <View>
            <Text>{colorName}</Text>
            <Button title={`Aumentar ${colorName}`} onPress={() => {}} />
            <Button title={`Diminuir ${colorName}`} onPress={() => {}} />
        </View>
    )
};

const styles = StyleSheet.create();

export default ColorCounter;