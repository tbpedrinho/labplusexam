import './util/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';
import { ExamsController } from '@src/controllers/exams';
import { LabsController } from '@src/controllers/labs';
import { Application } from 'express';
import cors from 'cors';
import * as database from '@src/database';
import logger from './logger';

export class SetupServer extends Server {
  
  private server?: http.Server;
  /*
   * same as this.port = port, declaring as private here will
   * add the port variable to the SetupServer instance
   */
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

  public getApp(): Application {
    return this.app;
  }

  private async databaseSetup(): Promise<void> {
    await database.connect();
  }
  public async close(): Promise<void> {
    await database.close();
  }

  
  public async start(): Promise<void> {
    this.server = this.app.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port);
    });
  }

 
}
