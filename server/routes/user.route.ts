import express from "express";
import { registrationUser,activateUser } from "../controller/user.controller";
const useRouter = express.Router();

useRouter.post("/registration", registrationUser);
useRouter.post("/activate-user", activateUser);

export default useRouter;
