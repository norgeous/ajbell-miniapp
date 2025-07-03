import { expect, test } from 'vitest';
import { fetchAll } from './endpoint';

import adventurous from '../mocks/Adventurous.json';
import balanced from '../mocks/Balanced.json';
import cautious from '../mocks/Cautious.json';
import responsible from '../mocks/Responsible.json';

test('Contact 4 endpoints', async () => {
  const data = await fetchAll();

  await expect(data).toEqual({
    BYW8RV9: cautious,
    BYW8RX1: balanced,
    BYW8VG2: adventurous,
    BN0S2V9: responsible,
  });
});
