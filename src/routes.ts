import { Application } from "express";

const appRoutes = (app: Application) => {
  const routes = () => {
    console.log(app);
  };
  routes();
};

export default appRoutes;
