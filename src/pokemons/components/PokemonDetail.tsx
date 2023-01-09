import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { getPokemonInfo } from '../hooks/usePokemon';
import { Link } from 'react-router-dom';

interface Props {
    pokemon: any;
}

export const PokemonDetail: FC<Props> = ({ pokemon }) => {
    return (
        <>
            <div className="col-12 mb-3">

                <button className="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <Link to='./pokemons'>Go Back</Link>
                </button>
            </div>

            {pokemon &&
                <>
                    <span>{pokemon.name.toUpperCase()}</span>
                    <div>
                        {pokemon.types.map((type: any, index: number) => (
                            <div key={type.type.name}>
                                <span className="p-2 m-1 inline-flex items-center rounded-full bg-gray-100 px-3 py-0.5 text-sm font-medium text-gray-800">
                                    {type.type.name}
                                </span>
                            </div>
                        ))
                        }
                    </div >
                    <div className='m-4'>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Stats</h3>
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                            {pokemon.stats.map((stat: any, index: number) => (
                                <div key={stat.stat.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
                                    <dt className="truncate text-sm font-medium text-gray-500">{stat.stat.name}/effort</dt>
                                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.base_stat}</dd>
                                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{stat.effort}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                    <div className="card mb-2 pokemon">
                        <div className="card-body d-flex align-items-center">
                            <div className="d-flex flex-column flex-fill px-2">
                                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
                                    {Object.keys(pokemon.sprites).map((key: any, index: number) => {
                                        return typeof pokemon.sprites[key] === "string" ? <div key={pokemon.name} className="group relative" >
                                            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 items-center">
                                                <img src={`${pokemon.sprites[key]}`} alt={`${pokemon.sprites[key]}`} className="object-cover object-center" />
                                                <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
                                                    <button
                                                        disabled={true}
                                                        className="w-full rounded-md bg-white bg-opacity-75 py-2 px-4 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                                                        {key}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                            : <></>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
        </>

    )
}
