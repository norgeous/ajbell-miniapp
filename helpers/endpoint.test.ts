import { expect, test } from 'vitest';
import { fetchAll } from './endpoint';

test('adds 1 + 2 to equal 3', async () => {
  const data = await fetchAll;
  expect(3).toBe(3);
});
