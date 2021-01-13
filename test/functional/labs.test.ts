import { Labs } from "@src/models/labs";

describe('Beach functional tests', () => {
  beforeAll(async()=>await Labs.deleteMany({}));
  describe('When creating a lab', () => {
    it('should return a lab', async () => {
      const newLab = {
        name: 'Fleury',
        address: 'Rua dos bobonos Nº: 0',
        status: true,
      };

      const response = await global.testRequest.post('/labs').send(newLab);
      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newLab));
    });
  });
});
