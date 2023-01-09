import { FC, useState } from 'react';
import { Outlet } from 'react-router';


export const PokemonApp: FC = () => {
  const [nextUrl, setNextUrl] = useState(null);


  return (
    <div className="bg-gray-200 mt-3">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

        <Outlet />
        {/* <PokemonListView pokemons={pokemonsQuery.data?.pages.flat() || []} /> */}
      </div>
    </div >
  )
}
