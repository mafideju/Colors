import React, { useReducer } from 'react';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return { ...state, counter: action.payload}
    case 'SUB':
      return { ...state, counter: action.payload}
    case 'RESET':
      return { ...state, counter: action.payload}
    default: 
      return state
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 })
  return (
    <View style={styles.container}>
      <Text>Carneirinhos: {state.counter}</Text>
      <View style={styles.buttonList}>
        <Button
          style={styles.buttons}
          title="Adiciona"
          onPress={() => dispatch({ type: 'ADD', payload: state.counter + 1 })}
        />
        <Button
          style={styles.buttons}
          title="Reseta"
          onPress={() => dispatch({ type: 'RESET', payload: 0 })}
        />
        <Button
          style={styles.buttons}
          title="Diminui"
          onPress={() => dispatch({ type: 'SUB', payload: state.counter - 1 })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonList: {
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CounterScreen;
