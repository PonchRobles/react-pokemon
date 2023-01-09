import { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PokemonCard } from '../components/PokemonCard';
import { FC } from 'react';
import { usePokemonsInfinite } from "../hooks/usePokemonsInfinite";

export const PokemonListView = () => {
    const { pokemonsQuery } = usePokemonsInfinite();

    const [getPokemon, setPokemon] = useState(null);

    return (
        <>
            <div className="flex items-center justify-between space-x-4">
                <h2 className="text-lg font-medium text-gray-900">Pokemons</h2>
                <div className="p-5">
                    <button onClick={() => pokemonsQuery.fetchNextPage()}
                        className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Load  more...
                    </button>
                </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                {(pokemonsQuery.data?.pages.flat() || []).map((group: any, index: number) => {
                    return group.results.map((pokemon: any, index: number) =>
                        <PokemonCard
                            key={`${pokemon.name}-index`}
                            pokemon={pokemon}
                            handleViewPokemon={(e: any) => setPokemon(e)}
                            isDisable={false} />
                    )
                })}
            </div >
        </>
    )
}
