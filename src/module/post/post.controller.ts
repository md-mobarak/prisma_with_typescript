import { RequestHandler } from "express";
import { postService } from "./post.service";

const postCreateController: RequestHandler = async (req, res) => {
  try {
    const result = await postService.createPostService(req.body);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "post create successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "post not create successfully",
      Error: err,
    });
  }
};

const getAllPostController: RequestHandler = async (req, res) => {
  try {
    const options = req?.query;
    const result = await postService.getAllPost(options);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "post get successfully",
      total: result?.length,
      data: result,
    });
  } catch (err) {
    console.log(err);

    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "post not get successfully",
      Error: err,
    });
  }
};
const singlePostController: RequestHandler = async (req, res) => {
  try {
    const result = await postService.singleSpostGet(parseInt(req.params.id));
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "single post get successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "single post not get successfully",
      Error: err,
    });
  }
};
const uodatePostController: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const result = await postService.updatePostService(id, data);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "post updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "post not updated successfully",
      Error: err,
    });
  }
};
const deletePostController: RequestHandler = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await postService.deletePostService(id);
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "post deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "post deleted successfully",
      Error: err,
    });
  }
};
const learnAgreegateAndGropingController: RequestHandler = async (req, res) => {
  try {
    const result = await postService.learnAgreegateAndGroup();
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "result",
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      statusCode: 404,
      success: true,
      message: "result",
      Error: err,
    });
  }
};

export const postController = {
  deletePostController,
  postCreateController,
  getAllPostController,
  singlePostController,
  uodatePostController,
  learnAgreegateAndGropingController,
};
