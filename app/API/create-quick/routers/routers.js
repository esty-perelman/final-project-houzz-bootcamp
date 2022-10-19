import { authorize } from "../../authentications-and-authorizations/authorize.js";
import { throwError } from "../../../log-message.js";
import {
  GetAllController,
  GetByIdController,
  AddController,
  UpdateController,
  DeleteController,
  DeleteByIdController,
} from "./controllers.js";

const middleWare = (route) => {
  return [
    authorize(route.roles),
    route.middleware ? route.middleware : (req, res, next) => next(),
  ];
};

const createAllDefaultRouters = (router, routerModel) => {
  routerModel.routers.map((route) => {
    switch (Object.keys(route)[0].toUpperCase()) {
      /* get all */
      case "GETALL":
        router.get("/", middleWare(route), (req, res) => {
          GetAllController(req, res, routerModel.model);
        });
      /* get by id */
      case "GETBYID":

        router.get("/:id", middleWare(route), (req, res) => {
          GetByIdController(req, res, routerModel.model);
        });
      /* add */
      case "POST":
        router.post("/",  middleWare(route), (req, res) => {
          AddController(req, res, routerModel.model);
        });
      /* updete */
      case "PUT":
        router.put("/:id",  middleWare(route), (req, res) => {
          UpdateController(req, res, routerModel.model);
        });
      /* delete */
      case "DELETEALL":
        router.delete("/", middleWare(route), (req, res) => {
          DeleteController(req, res, routerModel.model);
        });
      /* delete by id*/
      case "DELETEBYID":
        router.delete("/:id",  middleWare(route), (req, res) => {
          DeleteByIdController(req, res, model);
        });
        break;
      default: //לא יכול להיות מוגדר כראוטר
        throwError(`${route} doesn't can definde like router`);
        break;
    }
  });
};

export default createAllDefaultRouters
