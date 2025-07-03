import { expect, test } from 'vitest';
import { fetchAll } from './endpoint';

test('mock attempt 1', async () => {
  const data = await fetchAll;

  await expect(data.BYW8RV9).toEqual({
    id: 'abc-123x',
    firstName: 'John',
    lastName: 'Maverick',
  });
});

test('mock from docs', async () => {
  const response = await fetch(
    'https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json',
  );

  await expect(response.json()).resolves.toEqual({
    id: 'abc-123',
    firstName: 'John',
    lastName: 'Maverick',
  });
});
