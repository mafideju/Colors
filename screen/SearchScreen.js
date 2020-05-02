import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import COLORS from '../utils/COLORS';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'são paulo'
                }
            });
            setResults(response.data.businesses);
        } catch (e) {
            setError(`Algo Inesperado Aconteceu =|\nTente Novamente em Alguns Minutos\n${e}`)
        };
    };

    // hooks para chamar uma unica vez a função desejada
    useEffect(() => {
        searchApi('pasta');
    }, [])

    return (
        <View style={styles.container}>
            <SearchBar
                term={term}
                onChangeTerm={setTerm}
                onSubmitTerm={(val) => searchApi(val)}
            />
            <Text
                style={styles.results}
            >
                {results.length <= 1
                ? `Foi encontrado ${results.length} resultado.`
                : `Foram encontrados ${results.length} resultados.`}
            </Text>
            
            {error || error.length > 0 ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white2,
      },
      error: {
        padding: 15
      },
      results: {
          paddingTop: 15,
          paddingHorizontal: 15 
      }
});

export default SearchScreen;
