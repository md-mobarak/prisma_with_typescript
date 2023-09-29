import cors from "cors";
import express, { Application } from "express";
import { categoryRouter } from "./module/category/category.route";
import { postRouter } from "./module/post/post.route";
import { userRouter } from "./module/user/user.route";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/post", postRouter);
export default app;
