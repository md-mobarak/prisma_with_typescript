import express from "express";
import { userController } from "./user.controller";

const route = express.Router();

// route.get("/user", (req, res) => {
//   res.send("hello prisma");
// });
route.post("/create-user", userController.userCreateController);
route.post("/profile", userController.userCreateOrUpdateController);
route.get("/", userController.userGetController);
route.get("/:id", userController.userGetSingleController);

export const userRouter = route;
