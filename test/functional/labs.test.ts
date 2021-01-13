import supertest from 'supertest';

describe('Beach labs funcitional tests', () => {
  it('should return a lab with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/labs');
    expect(status).toBe(200);
    expect(body).toEqual({
      name: 'Fleury',
      address: 'Rua dos bobonos Nº: 0',
      status: true,
    });
  });
});
