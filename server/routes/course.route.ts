import express from "express"
import { uploadCourse,editCourse, getSingleCourse,getAllCourse,getCourseByUser,addQuestion,addAnswer } from "../controller/course.controller";
import { authorizeRole, isAuthenticated } from "../middleWare/auth";
const couseRouter = express.Router();
console.log(couseRouter);

couseRouter.post('/create-course',isAuthenticated, authorizeRole("admin"), uploadCourse)
couseRouter.put('/edit-course/:id',isAuthenticated, authorizeRole("admin"), editCourse)
couseRouter.get('/get-course/:id', getSingleCourse)
couseRouter.get('/get-courses', getAllCourse)
couseRouter.get('/get-course-content/:id',isAuthenticated, getCourseByUser)
couseRouter.put('/add-question',isAuthenticated, addQuestion) 
couseRouter.put('/add-answer',isAuthenticated, addAnswer) 
export default couseRouter