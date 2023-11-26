import express from  "express"
import { registrationUser } from "../controller/user.controller";
const router = express.Router();
console.log(registrationUser);

router.post('/registration',registrationUser);


export default router
