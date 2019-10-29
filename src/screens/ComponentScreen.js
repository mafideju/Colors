import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';

const ComponentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container__content}>
        <View>
          <Image 
            source={require("./../../assets/0.jpeg")}
          />
        </View>
        <View>
          <Text>Marcio Mafideju Rodrigues</Text>
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
});

export default ComponentScreen;
