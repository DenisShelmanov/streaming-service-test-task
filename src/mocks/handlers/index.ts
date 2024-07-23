import { http } from 'msw';

import { movies } from '../data';

export const handlers = [
  http.get('/api/movies', () => {
    return new Response(JSON.stringify(movies), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
