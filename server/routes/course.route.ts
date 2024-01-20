import express from "express"
import { uploadCourse,editCourse, getSingleCourse } from "../controller/course.controller";
import { authorizeRole, isAuthenticated } from "../middleWare/auth";
const couseRouter = express.Router();
console.log(couseRouter);

couseRouter.post('/create-course',isAuthenticated, authorizeRole("admin"), uploadCourse)
couseRouter.put('/edit-course/:id',isAuthenticated, authorizeRole("admin"), editCourse)
couseRouter.get('/get-course/:id', getSingleCourse)
export default couseRouter