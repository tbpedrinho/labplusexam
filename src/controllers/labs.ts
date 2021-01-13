import { Controller, Get, Post } from '@overnightjs/core';
import { Response, Request } from 'express';
import {Labs} from '@src/models/labs';

@Controller('labs')
export class LabsController {
  @Post('')
  public async createLabs (req: Request, res: Response):Promise<void>{
    const lab = new Labs(req.body);
    const result = await lab.save();
    res.status(201).send(result);
}
}
