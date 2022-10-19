import express from "express";
import basicAppWithExpress from "./create-quick/express.js";
import userRouter from "../users/controllers.js";
import leasingRouter from "../product/leasing/controllers.js";
import rentingRouter from "../product/renting/controllers.js";
import saleRouter from "../product/sale/controllers.js";
import cartRouter from "../cart/controllers.js"
// import chatbotRouter from "../../features/support-system/chatbot/router.js"
import signRouter from "../../features/admin/sign/controllers.js";
import errHendler from "./authentications-and-authorizations/error-handler.js";
import emailRrouter from "../emails/controller.js"
import requestRrouter from "../../features/support-system/requests/controller.js";
const appAPI = () => {
  const app = basicAppWithExpress();
  app.use(signRouter);
  app.use("/users", userRouter);
  app.use("/leasing", leasingRouter);
  app.use("/renting", rentingRouter);
  app.use("/sale", saleRouter);
  app.use("/cart", cartRouter);
  // app.use("/chatbot", chatbotRouter);
  app.use("/emails", emailRrouter);
  app.use("/requests", requestRrouter);
  app.use(errHendler);
  
  if (process.env.NODE_ENV === 'production') {
    console.log("Using static client files!");
    app.use(express.static('client/build'));
  }
};

export default appAPI;
