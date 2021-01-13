import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ExamsController } from '@src/controllers/exams';
import { LabsController } from '@src/controllers/labs';
import './util/module-alias';
import { Application } from 'express';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
  private setupControllers(): void {
    const examController = new ExamsController();
    const labsController = new LabsController();
    this.addControllers([examController, labsController]);
  }
  public getApp(): Application {
    return this.app;
  }
}
