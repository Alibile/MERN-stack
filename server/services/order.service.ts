import { NextFunction,Request,Response } from "express";
import { CatchAsyncError } from "../middleWare/catchAsyncErrors";
import OrderModel from "../models/orderModel";

/// create new order
export const newOrder = CatchAsyncError(async (data:any,next:NextFunction,res:Response) => {
const order = await OrderModel.create(data);
res.status(201).json({ success: true, order });
})