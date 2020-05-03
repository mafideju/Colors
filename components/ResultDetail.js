import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

const ResultDetail = ({
    result,
    navigation
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: result.id })}>
                <Image
                    source={{ uri: result.image_url }}
                    style={styles.image}
                />
                <Text style={styles.name}>{result.name}</Text>
                <Text style={styles.visibility}>{result.rating} estrelas - {result.review_count} avaliações</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
        marginRight: 5,
        borderRadius: 4,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 12
    },
    visibility: {
        fontSize: 8
    }
});

export default withNavigation(ResultDetail);
