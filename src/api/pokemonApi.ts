import axios from 'axios';


export const pokemonApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    headers: {
        // Authorization: 'Bearer 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'
    }
});
