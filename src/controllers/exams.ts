import { Controller, Get, Post } from '@overnightjs/core';
import { Response, Request } from 'express';
import {Exams} from '@src/models/exams';

@Controller('exams')
export class ExamsController {
  @Post('')
  public async createExams (req: Request, res: Response):Promise<void>{
    const exam = new Exams(req.body);
    const result = await exam.save();
    res.status(201).send(result);
}
}
