import BlogModel from "../models/ClienteModel.js";

//Metodos para el CRUD
//Mostrar TODO
export const getAllBlogs2 = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({ message: error.message })
    }
};


//Mostrar un registro
export const getBlog2 = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: { id: req.params.id }
        })
        res.json(blog[0])
    } catch (error) {
        res.json({ message: error.message })
    }
};

//Crear un registro
export const createBlog2 = async (req, res) => {
    try {
        await BlogModel.create(req.body)
        res.json({ message: "Registro creado con exito" })
    } catch (error) {
        res.json({ message: error.message })
    }
};
//Actualizar un registro
export const updateBlog2 = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ message: "Registro actualizado con exito" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Eliminar un registro
export const deleteBlog2 = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ message: "Registro borrado con exito" })
    } catch (error) {
        res.json({ message: error.message })
    }
}
