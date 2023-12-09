import express from "express";
import { registrationUser,activateUser, loginUser,logoutUser, updateAccessToken, getUserInfo,socialAuth, updateUserInfo, updatePassword } from "../controller/user.controller";
import { authorizeRole, isAuthenticated } from "../middleWare/auth";
const useRouter = express.Router();
useRouter.post("/registration", registrationUser);
useRouter.post("/activate-user", activateUser);
useRouter.post("/login", loginUser);
useRouter.get("/logout",isAuthenticated, logoutUser);
useRouter.get("/refresh",updateAccessToken);
useRouter.get("/me",isAuthenticated,getUserInfo);
useRouter.post("/social-auth",socialAuth);
useRouter.put("/update-user-info",isAuthenticated,updateUserInfo);
useRouter.put("/update-user-password",isAuthenticated,updatePassword);


export default useRouter;
