import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({
    color,
    colorName,
    onIncrease,
    onDecrease,
}) => {
    return (
        <View>
            <Text>{colorName}</Text>
            <Button
                title={`Aumentar ${colorName}`}
                color={color}
                onPress={() => onIncrease()}
                // style={{ borderBottomWidth: 1, borderBottomColor: '#000' }}
            />
            <Button
                title={`Diminuir ${colorName}`}
                color={color}
                onPress={() => onDecrease()}
            />
        </View>
    )
};

const styles = StyleSheet.create();

export default ColorCounter;