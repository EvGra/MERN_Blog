import { Router } from "express";
import { checkAuth } from "../utils.js/checkAuth.js";
import { createComment } from "../controllers/comments.js";

const router = new Router();

router.post("/:id", checkAuth, createComment);

export default router;
