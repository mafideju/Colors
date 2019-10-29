import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListOne = () => {
  const colors = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'green'},
    {color: 'pink'},
    {color: 'purple'},
    {color: 'orange'},
    {color: 'yellow'},
    {color: 'brown'},
    {color: 'gray'},
    {color: 'silver'},
    {color: 'golden'},
    {color: 'black'},
    {color: 'white'}
  ];
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.color}
        data={colors}
        style={styles.flatlist}
        renderItem={({item}) => {
          return (
            <View style={styles.listContent}>
              <Text style={styles.textStyle}>{item.color}</Text>
            </View>
          )
        }}  
      />
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
  listContent: {
    borderTopColor: '#018A45',
    borderTopWidth: 1,
    borderStyle: 'solid',
    margin: 10,
    borderLeftColor: '#018A45',
    borderLeftWidth: 7,
  },
  textStyle: {
    fontSize: 25,
    color: '#01CE45',
    fontFamily: 'monospace',
    marginLeft: 5
  }
});

export default ListOne;
