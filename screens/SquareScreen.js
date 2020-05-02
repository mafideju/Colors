import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const amount = 5;
    
    const setColor = (color, change) => {
        switch (color) {
            case 'red':
                return red + change > 255 || red + change < 0 ? null : setRed(red + change);
            case 'green':
                return green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            case 'blue':
                return blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            default: 
                return;
        }
    }

    return (
        <View>
            <ColorCounter
                colorName={`Vermelho - ${red}`}
                onIncrease={() => setColor('red', amount)}
                onDecrease={() => setColor('red', -1 * amount)}
            />
            <ColorCounter
                colorName={`Verde - ${green}`}
                onIncrease={() => setColor('green', amount)}
                onDecrease={() => setColor('green', -1 * amount)}
            />
            <ColorCounter
                colorName={`Azul - ${blue}`}
                onIncrease={() => setColor('blue', amount)}
                onDecrease={() => setColor('blue', -1 * amount)}
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
        </View>
    )
};

const styles = StyleSheet.create();

export default SquareScreen;