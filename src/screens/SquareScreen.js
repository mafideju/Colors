import React, { useReducer } from 'react'
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const colorAdjust = 5
const reducer = (state, action) => {
  switch(action.type) {
    case 'RED':
      return state.red + action.payload < 0 || state.red + action.payload > 256
      ? state
      : { ...state, red: state.red + action.payload }
    case 'GREEN':
      return state.green + action.payload < 0 || state.green + action.payload > 256
      ? state
      : { ...state, green: state.green + action.payload }
    case 'BLUE':
      return state.blue + action.payload < 0 || state.blue + action.payload > 256
      ? state
      : { ...state, blue: state.blue + action.payload }
    default:
      return state 
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  return (
    <View>
      <ColorCounter
        color="Vermelho"
        buttonColor="red"
        onIncrease={() => dispatch({ type: 'RED', payload: colorAdjust })}
        onDecrease={() => dispatch({ type: 'RED', payload: -1 * colorAdjust })}
      />
      <ColorCounter
        color="Verde"
        buttonColor="green"
        onIncrease={() => dispatch({ type: 'GREEN', payload: colorAdjust })}
        onDecrease={() => dispatch({ type: 'GREEN', payload: -1 * colorAdjust })}
      />
      <ColorCounter
        color="Azul"
        buttonColor="blue"
        onIncrease={() => dispatch({ type: 'BLUE', payload: colorAdjust })}
        onDecrease={() => dispatch({ type: 'BLUE', payload: -1 * colorAdjust })}
      />
      <View style={{
        height: 200,
        width: '100%',
        backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
        }}
      >
        <Text 
          style={{ color: 'white' }}>
            {`rgb(${state.red},${state.green},${state.blue})`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen