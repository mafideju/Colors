import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import COLORS from '../utils/COLORS';

const SearchBar = ({
    term,
    onChangeTerm,
    onSubmitTerm
}) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name='search' style={styles.iconInput} />
            <TextInput
                placeholder='Descubra Seu Restaurante!'
                style={styles.textInput}
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onSubmitTerm}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white1,
        color: COLORS.primary2,
        height: 50,
        borderRadius: 5,
        margin: 10,
        paddingHorizontal: 3,
        borderBottomColor: COLORS.primary2,
        borderBottomWidth: 2,
        flexDirection: 'row',
    },
    iconInput: {
        fontSize: 40,
        color:COLORS.primary2,
        alignSelf:'center'
    },
    textInput: {
        fontSize: 18,
        marginLeft: 5,
        width: 230
    }
});

export default SearchBar;