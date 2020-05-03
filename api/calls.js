import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

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
        searchApi();
    }, []);

    return [searchApi, results, error];
};
