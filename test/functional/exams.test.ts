describe('Beach exams funcitional tests', () => {
  it('should return a exam with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/exams');
    expect(status).toBe(200);
    expect(body).toEqual({
      name: 'Glicose',
      address: 'Análise Clínica',
      status: true,
    });
  });
});
