import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IMovie } from '../modules/feed/interfaces';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getMovies: builder.query<IMovie[], void>({
      query: () => 'movies',
    }),
  }),
});

export const { useGetMoviesQuery } = api;
