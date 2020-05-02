import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxesScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.boxOne}></View>
            <View style={styles.boxTwo}></View>
            <View style={styles.boxThree}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 4,
        paddingBottom: 0,
        backgroundColor: 'rgb(83, 116, 73)',
        // flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        ...StyleSheet.absoluteFillObject,
    },
    boxOne: {
        width: 80,
        height: 80,
        backgroundColor: 'rgb(138,24,171)'
    },
    boxTwo: {
        width: 80,
        height: 80,
        backgroundColor: 'rgb(221,111,25)',
        alignSelf: 'center'
        // marginTop: 100,
        // position: 'absolute',
        // top: 100,
        // left: 115
        // ...StyleSheet.absoluteFillObject,
    },
    boxThree: {
        width: 80,
        height: 80,
        backgroundColor: 'rgb(128,34,10)'
    }
});

export default BoxesScreen;