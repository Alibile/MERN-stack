import { Response } from "express";
import CourseModel from "../models/course.model";
import { CatchAsyncError } from "../middleWare/catchAsyncErrors";


//create course 
export const createCourse = CatchAsyncError(async (data: any,res:Response,) => {
    const course = await CourseModel.create(data);
    console.log(course);
    
    res.status(201).json({
        success: true,
        course
    })
})