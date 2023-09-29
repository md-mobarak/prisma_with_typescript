import { RequestHandler } from "express";
import { categoryService } from "./category.service";

const categoryCreateController: RequestHandler = async (req, res) => {
  const result = await categoryService.categoryCreateService(req.body);
  try {
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "category create successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "category not create successfully",
      Error: err,
    });
  }
};

export const categoryController = {
  categoryCreateController,
};
