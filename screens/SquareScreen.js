import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload };
        case 'green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload };
        case 'blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    };
};

const SquareScreen = () => {
    const [{ red, green, blue }, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const AMOUNT = 10;

    return (
        <View style={styles.container}>
            <ColorCounter
                color={`rgb(${red},${0},${0})`}
                colorName={`Vermelho - ${red}`}
                onIncrease={() => dispatch({ type: 'red', payload: AMOUNT })}
                onDecrease={() => dispatch({ type: 'red', payload: -1 * AMOUNT })}
            />
            <ColorCounter
                color={`rgb(${0},${green},${0})`}
                colorName={`Verde - ${green}`}
                onIncrease={() => dispatch({ type: 'green', payload: AMOUNT })}
                onDecrease={() => dispatch({ type: 'green', payload: -1 * AMOUNT })}
            />
            <ColorCounter
                color={`rgb(${0},${0},${blue})`}
                colorName={`Azul - ${blue}`}
                onIncrease={() => dispatch({ type: 'blue', payload: AMOUNT })}
                onDecrease={() => dispatch({ type: 'blue', payload: -1 * AMOUNT })}
            />
            <View style={{ height: 100, width: 230, backgroundColor: `rgb(${red}, ${green}, ${blue})`, marginTop: 15 }}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        padding: 40,
        backgroundColor: '#ccc',
        flex: 1,
        borderRadius: 5
    }
});

export default SquareScreen;