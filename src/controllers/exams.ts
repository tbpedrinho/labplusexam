import { Controller, Get } from '@overnightjs/core';
import { Response, Request } from 'express';

@Controller('exams')
export class ExamsController {
  @Get('')
  public getAllExam(req: Request, res: Response): void {
    res.send({ name: 'Glicose', address: 'Análise Clínica', status: true });
  }
}
