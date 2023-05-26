import  express  from "express";
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/VendedorController.js";
import { getAllBlogs2, getBlog2, createBlog2, updateBlog2, deleteBlog2} from "../controllers/ClienteController.js";
const router =  express.Router()


//vendedores
router.get("/", getAllBlogs);
router.get("/:id", getBlog);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;