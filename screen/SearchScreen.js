import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import COLORS from '../utils/COLORS';
import useCalls from '../api/calls';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, error] = useCalls();

    const filterByPrice = (price) => {
        return results.filter(res => res.price === price);
    };

    return (
        <View style={styles.container} vertical>
            <SearchBar
                term={term}
                onChangeTerm={setTerm}
                onSubmitTerm={() => searchApi(term)}
            />
            <Text
                style={styles.results}
            >
                {results.length <= 1
                ? `Foi encontrado ${results.length} resultado.`
                : `Foram encontrados ${results.length} resultados.`}
            </Text>
            
            {error || error.length > 0 ? <Text style={styles.error}>{error}</Text> : null}

            <ScrollView showsVerticalScrollIndicator={false}>
                <ResultList
                    title='Luxo'
                    results={filterByPrice('$$$$')}
                />
                <ResultList
                    title='Especial'
                    results={filterByPrice('$$$')}
                />
                <ResultList
                    title='Efetivo'
                    results={filterByPrice('$$')}
                />
                <ResultList
                    title='Amigável'
                    results={filterByPrice('$')}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white2,
        flex: 1,
        padding: 10
      },
      error: {
      },
      results: {
          paddingTop: 15,
          paddingBottom: 5
      }
});

export default SearchScreen;
