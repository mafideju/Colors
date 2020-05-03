import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ResultDetail from './ResultDetail';

const ResultList = ({
    title,
    results,
}) => {
    if (!results.length) {
        return null;
    }
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>Resultados: {results.length}</Text>
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={res => res.id}
                data={results}
                renderItem={({ item }) => (
                    <ResultDetail
                        result={item}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    subTitle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default ResultList;
