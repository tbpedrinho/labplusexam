import { Controller, Get } from '@overnightjs/core';
import { Response, Request } from 'express';

@Controller('labs')
export class LabsController {
  @Get('')
  public getAllLabs(req: Request, res: Response): void {
    res.send({
      name: 'Fleury',
      address: 'Rua dos bobonos Nº: 0',
      status: true,
    });
  }
}
