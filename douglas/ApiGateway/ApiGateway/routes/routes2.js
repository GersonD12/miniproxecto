import  express  from "express";
import { getAllBlogs2, getBlog2, createBlog2, updateBlog2, deleteBlog2} from "../controllers/ClienteController.js";
const router =  express.Router()


//vendedores
router.get("/", getAllBlogs2);
router.get("/:id", getBlog2);
router.post("/", createBlog2);
router.put("/:id", updateBlog2);
router.delete("/:id", deleteBlog2);

export default router;