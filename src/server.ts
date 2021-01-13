import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ExamsController } from '@src/controllers/exams';
import { LabsController } from '@src/controllers/labs';
import { Application } from 'express';
import * as database from '@src/database';

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
    await this.databaseSetup();
  }
  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
  private setupControllers(): void {
    const examController = new ExamsController();
    const labsController = new LabsController();
    this.addControllers([examController, labsController]);
  }
  private async databaseSetup(): Promise<void> {
    await database.connect();
  }
  public async close(): Promise<void> {
    await database.close();
  }

  public getApp(): Application {
    return this.app;
  }
}
