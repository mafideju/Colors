import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import ImageDetail from './../components/ImageDetail';

const ComponentTela = ({ navigation }) => {
  return (
    <View>
      <ImageDetail 
        title="Floresta"
        image={require("./../../assets/forest.jpg")}
        score='9.25'
      />
      <ImageDetail 
        title="Montanhas"
        image={require("./../../assets/mountain.jpg")}
        score='9.75'
      />
      <ImageDetail 
        title="Praia"
        image={require("./../../assets/beach.jpg")}
        score='8'
      />
      <Button title="List One" onPress={() => navigation.navigate('List')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ComponentTela
