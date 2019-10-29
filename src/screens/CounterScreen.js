import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text>Carneirinhos: {counter}</Text>
      <View style={styles.buttonList}>
        <Button 
          style={styles.buttons} 
          title="Adiciona" 
          onPress={() => setCounter(counter + 1)}
        />
        <Button 
          style={styles.buttons} 
          title="Reseta" 
          onPress={() => setCounter(0)}
        />
        <Button 
          style={styles.buttons} 
          title="Diminui" 
          onPress={() => setCounter(counter - 1)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonList: {
    flexDirection: 'row'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default CounterScreen