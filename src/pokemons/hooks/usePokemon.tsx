import { useQuery } from '@tanstack/react-query';
import { pokemonApi } from '../../api/pokemonApi';
// import { Issue } from '../interfaces';
// import { sleep } from '../../helpers/sleep';

export const getPokemonInfo = async (pokemonNumber: number): Promise<any> => {
    // await sleep(2);
    const { data } = await pokemonApi.get<any>(`/${pokemonNumber}`);
    return data;
}

export const usePokemon = (pokemonNumber: number) => {

    const pokemonQuery = useQuery(
        ['pokemon', pokemonNumber],
        () => getPokemonInfo(pokemonNumber),
    );

    return {
        pokemonQuery,
    }
}
