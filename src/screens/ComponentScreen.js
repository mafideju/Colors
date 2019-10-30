import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ComponentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container__content}>
        <View>
          <Image 
            source={require("./../../assets/0.jpeg")}
            style={styles.imageItem}
          />
        </View>
        <View>
          <Text style={styles.imageText}>Marcio Mafideju Rodrigues</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F5FFF6',
    width: '100%',
    height: '100%'
  },
  container__content: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    height: '100%'
  },
  imageItem: {
    width: 400,
    height: 480
  },
  imageText: {
    fontSize: 30
  }
});

export default ComponentScreen;
