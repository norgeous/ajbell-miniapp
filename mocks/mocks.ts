import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://cdn.core3-dev.ajbbuild.uk/interview/BYW8RV9.json', () => {
    return HttpResponse.json({
      id: 'abc-123',
      firstName: 'John',
      lastName: 'Maverick',
    });
  }),
];
