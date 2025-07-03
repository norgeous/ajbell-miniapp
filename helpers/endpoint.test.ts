import { expect, test } from 'vitest';
import { fetchAll } from './endpoint';

import adventurous from '../mocks/Adventurous.json';
import balanced from '../mocks/Balanced.json';
import cautious from '../mocks/Cautious.json';
import responsible from '../mocks/Responsible.json';
import { server } from '../vitest.setup';
import { http, HttpResponse } from 'msw';

test('Contact 4 endpoints', async () => {
  const data = await fetchAll();

  expect(data).toEqual({
    BYW8RV9: cautious,
    BYW8RX1: balanced,
    BYW8VG2: adventurous,
    BN0S2V9: responsible,
  });
});

test('Simulate 1 of 4 endpoints 500 response', async () => {
  server.use(
    http.get('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json', () => {
      return new HttpResponse(null, { status: 500 });
    }),
  );

  const data = await fetchAll();

  expect(data).toEqual({
    BYW8RV9: undefined,
    BYW8RX1: balanced,
    BYW8VG2: adventurous,
    BN0S2V9: responsible,
  });
});
