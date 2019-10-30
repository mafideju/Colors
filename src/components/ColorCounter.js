import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList
} from 'react-native'

const ColorCounter = ({
  color,
  buttonColor,
  onIncrease,
  onDecrease
}) => {
  return (
    <View>
      <View>
        <Text>{color}</Text>
        <Button
          color={buttonColor}
          title={`Aumentar ${color}`} 
          onPress={() => onIncrease()}
        />
        <Button
          color={buttonColor}
          title={`Diminuir ${color}`} 
          onPress={() => onDecrease()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorCounter