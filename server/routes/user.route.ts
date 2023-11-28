import express from "express";
import { registrationUser,activateUser, loginUser,logoutUser } from "../controller/user.controller";
const useRouter = express.Router();
useRouter.post("/registration", registrationUser);
useRouter.post("/activate-user", activateUser);
useRouter.post("/login", loginUser);
useRouter.post("/logout", logoutUser);

export default useRouter;
