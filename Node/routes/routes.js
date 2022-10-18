import express, {Express} from "express";
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/BlogController";

const router = express.router();

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.get('/', createBlog);
router.get('/:id', updateBlog);
router.get('/:id', deleteBlog);

export default router;
