import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import COLORS from '../utils/COLORS';
import yelp from '../api/yelp';

const DetailScreen = ({
    navigation
}) => {
    const [resultById, setResultById] = useState(null);
    const id = navigation.getParam('id');

    const getResultById = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResultById(response.data)
    }

    useEffect(() => {
        getResultById(id)
    }, [])

    if (!resultById) {
        return null;
    }

    return (
        <>
            <View style={styles.infoContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{resultById.name}</Text>
                    <Text style={styles.price}>{resultById.price}</Text>
                </View>
                <View style={styles.listContainer}>
                    <Text style={styles.data}>{resultById.location.address1}</Text>
                    <Text style={styles.data}>{resultById.location.city}, {resultById.location.state}</Text>
                    <Text style={styles.data}>Aberto: {resultById.is_open_now === true ? 'Sim' : 'Não'}</Text>
                    <Text style={styles.data}>Reservas: {resultById.display_phone}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.data}>Cozinha: </Text>
                        <FlatList
                            keyExtractor={() => Math.random().toString()}
                            data={resultById.categories}
                            renderItem={({ item }) => (
                                <Text style={styles.data} key={Math.random()}>{item.title}</Text>
                            )}
                        />
                    </View>
                </View>
            </View>
            <FlatList
                style={styles.list}
                data={resultById.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => (
                    <Image
                        style={styles.image}
                        source={{ uri: item }}
                    />
                )}
            />
        </>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        padding: 10,
        paddingBottom: 5,
        backgroundColor: COLORS.white2
    },
    nameContainer: {
        backgroundColor: 'red',
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    name: {
        fontSize: 20,
        color: COLORS.white1
    },
    price: {
        fontSize: 16,
        alignSelf: 'center',
        color: COLORS.white1
    },
    listContainer: {
        backgroundColor: 'red',
        borderRadius: 5,
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    data: {
        color: COLORS.white2
    },
    image: {
        height: 200,
        marginHorizontal: 10,
        marginVertical: 5,
        width: 300,
        flex: 1
    }
});

export default DetailScreen;
