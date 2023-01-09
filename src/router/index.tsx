import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PokemonApp } from '../PokemonApp';

import { PokemonListView, PokemonView } from '../pokemons/views';

export const router = createBrowserRouter([
    {
        path: '/pokemons',
        element: <PokemonApp />,
        children: [
            { path: '/pokemons', element: <PokemonListView />, },
            { path: 'pokemon/:id', element: <PokemonView /> },
            { path: '*', element: <Navigate to="/pokemons" /> },
        ]
    },
    {
        path: '/',
        element: <Navigate to="/pokemons" />
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
]);
