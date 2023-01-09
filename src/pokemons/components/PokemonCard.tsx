import { FC, forwardRef, useEffect, useImperativeHandle } from 'react';
import { useNavigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { getPokemonInfo } from '../hooks/usePokemon';


interface Prop {
    pokemon: any;
    handleViewPokemon: any;
    isDisable: boolean;
}

export const PokemonCard: FC<Prop> = ({ pokemon, handleViewPokemon, isDisable }) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const prefetchData = () => {
        queryClient.prefetchQuery(
            ['pokemon', pokemon.name],
            () => getPokemonInfo(pokemon.name),
        );
    }

    const preSetData = () => {
        queryClient.setQueryData(
            ['pokemon', pokemon.number],
            pokemon,
            {
                updatedAt: new Date().getTime() + 100000
            }
        );
    }

    return (
        <div key={pokemon.name} className="group relative" onMouseEnter={prefetchData}>
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 items-center">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                    alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                    className="object-cover object-center" />
                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                    <button
                        disabled={isDisable}
                        onClick={() => navigate(`/pokemons/pokemon/${pokemon.url.split('/')[6]}`)}
                        className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                        View {pokemon.name}
                    </button>
                </div>
            </div>
        </div>
    )
}
