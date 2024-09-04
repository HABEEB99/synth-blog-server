import express, { Express } from "express";
import { AppServer } from "@root/setup-server";
import { config } from "@root/config";

class Application {
  public initializeApp(): void {
    this.loadConfig();
    const app: Express = express();
    const server: AppServer = new AppServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();
application.initializeApp();
