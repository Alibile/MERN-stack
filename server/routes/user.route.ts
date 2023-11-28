import express from "express";
import { registrationUser,activateUser, loginUser,logoutUser } from "../controller/user.controller";
import { isAuthenticated } from "../middleWare/auth";
const useRouter = express.Router();
useRouter.post("/registration", registrationUser);
useRouter.post("/activate-user", activateUser);
useRouter.post("/login", loginUser);
useRouter.post("/logout",isAuthenticated, logoutUser);

export default useRouter;
