import { Controller, Get, Post } from '@overnightjs/core';
import { Response, Request } from 'express';
import { Exams } from '@src/models/exams';
import mongoose from 'mongoose';

@Controller('exams')
export class ExamsController {
  
  @Get('')
  public async getExams(req: Request, res: Response): Promise<void>{
    try {
      const result = await Exams.find({});
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(422).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
  
  @Get('/status/active')
  public async getExamsbyStatusActive(req: Request, res: Response): Promise<void>{
    try {
      const result = await Exams.find({'status':true});
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(422).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
    
  @Get('/status/inactive')
  public async getExamsbyStatusInactive(req: Request, res: Response): Promise<void>{
    try {
      const result = await Exams.find({'status':false});
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(422).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
  
  
  @Post('')
  public async createExams(req: Request, res: Response): Promise<void> {
    try {
      const exam = new Exams(req.body);
      const result = await exam.save();
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(422).send({ error: error.message });
      } else {
        res.status(500).send({ error: 'Internal Server Error' });
      }
    }
  }
}
