import express from "express"
import { isAuthenticated } from "../middleWare/auth";
import { createOrder } from "../controller/order.controller";
const orderRouter = express.Router();
orderRouter.post("/create-order",isAuthenticated,createOrder);


export default orderRouter;