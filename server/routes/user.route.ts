import express from "express";
import { registrationUser } from "../controller/user.controller";
const useRouter = express.Router();

useRouter.post("/registration", registrationUser);

export default useRouter;
