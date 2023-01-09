import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonApp } from './PokemonApp'
import { RouterProvider } from 'react-router';
import { router } from './router';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './css/index.css'
const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />

      <RouterProvider router={router} />

    </QueryClientProvider>
  </React.StrictMode>
)
