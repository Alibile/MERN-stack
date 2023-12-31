import express from "express"
import { uploadCourse } from "../controller/course.controller";
import { authorizeRole, isAuthenticated } from "../middleWare/auth";
const couseRouter = express.Router();
console.log(couseRouter);

couseRouter.post('/create-course',isAuthenticated, authorizeRole("admin"), uploadCourse)


export default couseRouter