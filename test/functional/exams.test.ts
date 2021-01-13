import { Exams } from '@src/models/exams';

describe('Beach functional tests', () => {
  beforeAll(async () => await Exams.deleteMany({}));
  describe('When creating a exam', () => {
    it('should return a exam', async () => {
      const newExam = {
        name: 'Fleury',
        tipo: 'Analises Clinicas',
        status: true,
      };
      const response = await global.testRequest.post('/exams').send(newExam);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newExam));
    });

    it('should return 422 where there is a validation error', async () => {
      const newExam = {
        name: [],
        tipo: 'Analises Clinicas',
        status: true,
      };
      const response = await global.testRequest.post('/exams').send(newExam);

      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        error:
          'Exams validation failed: name: Cast to string failed for value "[]" at path "name"',
      });
    });
    it.skip('should return 500 when there is any error other than validation error', async () => {
      //TODO
    });
  });
});
