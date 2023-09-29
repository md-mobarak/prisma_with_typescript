import { RequestHandler } from "express";
import { userService } from "./user.service";

const userCreateController: RequestHandler = async (req, res) => {
  try {
    const result = await userService.userServiceFromDb(req.body);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User create successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "User not create successfully",
      Error: err,
    });
  }
};

const userCreateOrUpdateController: RequestHandler = async (req, res) => {
  try {
    const result = await userService.profileCreateOrUpdate(req.body);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "profile create/update successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "somthing went wrong in profile route",
      Error: err,
    });
  }
};

const userGetController: RequestHandler = async (req, res) => {
  try {
    const result = await userService.userGetService();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "User Get successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "User not get successfully",
      Error: err,
    });
  }
};
const userGetSingleController: RequestHandler = async (req, res) => {
  try {
    const result = await userService.userGetSingleService(
      parseInt(req.params.id)
    );
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Single User Get successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "Signle User not get successfully",
      Error: err,
    });
  }
};

export const userController = {
  userGetSingleController,
  userCreateController,
  userGetController,
  userCreateOrUpdateController,
};
