import { Labs } from '@src/models/labs';

describe('Beach functional tests', () => {
  beforeAll(async () => await Labs.deleteMany({}));
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
    it('should return 422 where there is a validation error', async ()=>{
      const newLab = {
        name: [],
        address: 'Rua dos bobonos Nº: 0',
        status: true,
      };
      const response = await global.testRequest.post('/labs').send(newLab);
      expect(response.status).toBe(422);
      expect(response.body).toEqual({
        error:
        'Labs validation failed: name: Cast to string failed for value "[]" at path "name"',
      });   
    });  
      it.skip('should return 500 when there is any error other than validation error', async()=>{
        //TODO
    });
  });
});