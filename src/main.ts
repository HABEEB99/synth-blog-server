import express, { Express } from "express";
import { AppServer } from "./setup-server";
import { config } from "./config";

class Application {
  public initializeApp(): void {
    this.loadConfig();
    const app: Express = express();
    const server: AppServer = new AppServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initializeApp();
