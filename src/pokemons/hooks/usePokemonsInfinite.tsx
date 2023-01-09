import { useInfiniteQuery } from '@tanstack/react-query';
import { pokemonApi } from '../../api/pokemonApi';
// import { sleep } from '../../helpers';
// import { Issue, State } from '../interfaces';

interface Props {
    page?: number;
}

interface QueryProps {
    pageParam?: string;
    queryKey: (string | Props)[];

}

const getPokemons = async ({ pageParam = '?offset=0&limit=20', queryKey }: QueryProps): Promise<any[]> => {
    const params = new URLSearchParams();
    const { data } = await pokemonApi.get<any[]>(`${pageParam}`, { params });

    return data;
}

export const usePokemonsInfinite = () => {
    const pokemonsQuery = useInfiniteQuery(
        ['pokemons', 'infinite'],
        (data: any) => getPokemons(data),
        {
            getNextPageParam: (lastPage: any, pages) => {
                if (lastPage.length === 0) return;
                return lastPage.next.split('/')[6];
            },
        }
    );
    return {
        pokemonsQuery
    }
}
