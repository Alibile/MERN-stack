import { NextFunction,Request,Response } from "express";
import { CatchAsyncError } from "../middleWare/catchAsyncErrors";
import ErrorHandler from "../utils/ErrorHandler"
import cloudinary from "cloudinary"
import {createCourse} from "../services/course.service"


//upload course
export const uploadCourse = CatchAsyncError(async(req:Request,res:Response,next:NextFunction) => {
    try {
        const data =  req.body;
        const thumbnail = data.thumbnail
        if (thumbnail) {
            const myCloud = await cloudinary.v2.uploader.upload(thumbnail,{
                folder:"courses",
                width: 150,
            });
            data.thumbnail ={
                public_id:myCloud.public_id,
                url:myCloud.secure_url
            }
        }
        createCourse(data,res,next)
    } catch (error) {
        console.log(error);
        
        return next(new ErrorHandler(error.message, 500))
    }
})