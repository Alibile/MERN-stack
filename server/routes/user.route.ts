import express from "express";
import { registrationUser,activateUser, loginUser,logoutUser, updateAccessToken, } from "../controller/user.controller";
import { authorizeRole, isAuthenticated } from "../middleWare/auth";
const useRouter = express.Router();
useRouter.post("/registration", registrationUser);
useRouter.post("/activate-user", activateUser);
useRouter.post("/login", loginUser);
useRouter.get("/logout",isAuthenticated, logoutUser);
useRouter.get("/refresh",updateAccessToken);


export default useRouter;
