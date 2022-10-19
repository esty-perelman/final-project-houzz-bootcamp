import express from "express";
import { logNote, logWarning, throwError } from "../../../log-message.js";
import { createMongooseModel } from "../mongo.js";
import createAllDefaultRouters from "./routers.js";
const usingAppPath = false;

// const routerModel = {name: items, schema: {name: {type: string, requierd: true}}, routers: [{getAll}, {post: {roles: [Admin], middleWare}}]}
const createRouter = (routerModel) => {
  //catching errors and log warnings
  if (!routerModel.schema && !routerModel.model)
    throwError(`you are providering router-model without schema or model`);
  if (!routerModel.routers)
    throwError(`You are trying to build a router without routers`);

  if (routerModel.schema)
    routerModel.model = createMongooseModel(
      routerModel.name,
      routerModel.schema
    );
  const router = express.Router();
  createAllDefaultRouters(router, routerModel);
  return router;
};

export default createRouter;
