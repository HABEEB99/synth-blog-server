import express, { Express } from "express";
import { AppServer } from "./setup-server";

class Application {
  public initializeApp(): void {
    const app: Express = express();
    const server: AppServer = new AppServer(app);
    server.start();
  }
}

const application: Application = new Application();
application.initializeApp();
