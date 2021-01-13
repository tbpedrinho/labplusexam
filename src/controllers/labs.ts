import { Controller, Get, Post } from '@overnightjs/core';
import { Response, Request } from 'express';
import { Labs } from '@src/models/labs';
import mongoose from 'mongoose';

@Controller('labs')
export class LabsController {

 
  @Get('')
  public async getLabs(req: Request, res: Response): Promise<void>{
    try {
      const result = await Labs.find({});
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
  public async getLabsbyStatusActive(req: Request, res: Response): Promise<void>{
    try {
      const result = await Labs.find({'status':true});
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
  public async getLabsbyStatusInactive(req: Request, res: Response): Promise<void>{
    try {
      const result = await Labs.find({'status':false});
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
  public async createLabs(req: Request, res: Response): Promise<void> {
    try {
      const lab = new Labs(req.body);
      const result = await lab.save();
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
