import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container__content}>
        <View style={styles.header}>
          <Text style={styles.title}> Mafideju Software Co.</Text>
          <Text style={styles.subtitle}>Enlightened Development</Text>
        </View>
        <View style={styles.buttonList}>
          <Button
            title="Sobre"
            color="#007812"
            style={styles.actionButton}
            onPress={() => navigation.navigate('Components')} 
          />
          <Button
            title="Lista"
            color="#01CE45" 
            style={styles.actionButton}
            onPress={() => navigation.navigate('List')} 
          />
          <Button
            title="Pics"
            color="#007812"
            style={styles.actionButton}
            onPress={() => navigation.navigate('Image')} 
          />
          <Button
            title="Carneirinhos"
            color="#01CE45" 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Counter')} 
          />
          <Button
            title="Cores"
            color="#007812"
            style={styles.actionButton}
            onPress={() => navigation.navigate('Color')} 
          />
          <Button
            title="Quadrados"
            color="#01CE45" 
            style={styles.actionButton}
            onPress={() => navigation.navigate('Square')} 
          />
          <Button
            title="Forms"
            color="#007812"
            style={styles.actionButton}
            onPress={() => navigation.navigate('Form')} 
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F5FFF6',
    width: '100%',
    height: '100%'
  },
  container__content: {
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    height: '100%'
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle : 'solid',
    borderBottomColor: 'black',
    borderRadius: 5,
    padding: 10
  },
  title: {
    fontSize: 35,
    color: '#00C71E',
    borderWidth: 1,
    borderStyle : 'solid',
    borderColor: 'black',
    borderRadius: 5,
  },
  subtitle: {
    fontSize: 25,
    marginTop: 5,
    color: '#00400A',
    fontFamily: 'monospace'
  },
  // buttonList: {
  //   // width: '50%',
  //   // flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   padding: 15,
  //   // alignItems: 'center'
  // },
  // actionButton: {
  //   flex: 1,
  // }
});

export default HomeScreen;
