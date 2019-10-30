import React, { useState } from 'react'
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button
} from 'react-native'

const FormScreen = () => {
  const [formText, setFormText] = useState('')
  return (
    <View>
      <Text>FORM</Text>
      <TextInput 
        style={styles.inputField}
        autoCapitalize="none"  
        autoCorrect={false}
        autoFocus={true}
        value={formText}
        onChangeText={(val) => setFormText(val)}
      />
      <Text>{formText}</Text>
      <Text>{formText.length}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  inputField: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    margin: 5,
    padding: 2,
  }
})

export default FormScreen
