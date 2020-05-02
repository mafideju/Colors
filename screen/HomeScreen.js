import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import COLORS from '../utils/COLORS';

const HomeScreen = ({
    navigation
}) => {
    return (
        <View style={styles.container}>
            <Text>Ache o Seu!</Text>
            <Button
                title="Restaurantes"
                color={COLORS.primary2}
                onPress={() => navigation.navigate('Search')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: COLORS.white2,
      },
});

export default HomeScreen;
