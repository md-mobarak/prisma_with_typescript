import express from "express";
import { categoryController } from "./category.controller";

const route = express.Router();

route.post("/create", categoryController.categoryCreateController);

export const categoryRouter = route;
