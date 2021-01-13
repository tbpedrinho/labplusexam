import {Exams} from '@src/models/exams';

describe('Beach functional tests', () => {
  beforeAll(async()=>await Exams.deleteMany({}));
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
  });
});
