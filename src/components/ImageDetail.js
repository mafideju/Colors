import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, image, score }) => {
  return (
    <View>
      <Text>Foto: {title}</Text>
      <Image 
        style={styles.images}
        source={image}
      />
      <Text style={styles.score}>Nota: {score}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  images: {
    alignItems: 'center'
  },
  score: {
    marginBottom: 15,
    paddingBottom: 5,
    borderBottomColor: 'lightblue',
    borderBottomWidth: 3
  }
})

export default ImageDetail
