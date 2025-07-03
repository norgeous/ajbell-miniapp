import { http, HttpResponse } from 'msw';

import adventurous from './Adventurous.json';
import balanced from './Balanced.json';
import cautious from './Cautious.json';
import responsible from './Responsible.json';

export const handlers = [
  http.get('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json', () =>
    HttpResponse.json(cautious),
  ),
  http.get('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RX1.json', () =>
    HttpResponse.json(balanced),
  ),
  http.get('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8VG2.json', () =>
    HttpResponse.json(adventurous),
  ),
  http.get('https://cdn.core3-dev.ajbbuild.uk/interview/BN0S2V9.json', () =>
    HttpResponse.json(responsible),
  ),
];
