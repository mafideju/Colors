import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
    const [] = useState([]);

    return (
        <View>
            <ColorCounter colorName='red' />
            <ColorCounter colorName='green' />
            <ColorCounter colorName='blue' />
        </View>
    )
};

const styles = StyleSheet.create();

export default SquareScreen;