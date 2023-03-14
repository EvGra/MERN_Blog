import { Router } from "express";
import {
  createPost,
  getAll,
  getById,
  getMyPosts,
  removePosts,
  updatePost,
  getPostComments,
} from "../controllers/posts.js";
import { checkAuth } from "../utils.js/checkAuth.js";

const router = new Router();

router.post("/", checkAuth, createPost);

router.get("/", getAll);

router.get("/:id", getById);

router.get("/user/me", checkAuth, getMyPosts);

router.delete("/:id", checkAuth, removePosts);

router.put("/:id", checkAuth, updatePost);

router.get("/comments/:id", getPostComments);

export default router;
