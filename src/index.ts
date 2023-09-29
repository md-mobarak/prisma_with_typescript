import { PrismaClient } from "@prisma/client";
import app from "./app";
// import cors from "cors";
// import express, { Application } from "express";

// const app: Application = express();
// app.use(express.json());
// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();
async function main() {
  // const getAllUsers = await prisma.user.findMany();
  // console.log(getAllUsers);
  //   const postUser = await prisma.user.create({
  //     data: {
  //       email: "golamMustafa5@gmail.com",
  //       name: "golamMustafa5",
  //       age: 33,
  //     },
  //   });
  //   console.log(postUser);
  app.listen(port, () => {
    console.log(`hello world, running port ${port}`);
  });
}
main();
