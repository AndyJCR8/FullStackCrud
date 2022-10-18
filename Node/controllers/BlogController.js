import BlogModel from "../models/BlogModel";

//OBTENER TODOS LOS BLOGS
export const getAllBlogs = async (request, response) => {
  try {
    const blogs = await BlogModel.findAll();
    response.json(blogs);

  } catch (error) {
    response.json({message: error.message});
  }
}

//OBTENER UN BLOG
export const getBlog = async (request, response) => {
  try {
    const blog = await BlogModel.findAll({where: {id: request.params.id}});
    response.json(blog[0]);
  } catch (error) {
    response.json({message: error.message});
  }
}

//CREAR UN BLOG
export const createBlog = async (request, response) => {
  try {
    await BlogModel.create(request.body);
    response.json({message: "Registro creado con exito"});
  } catch (error) {
      response.json({message: error.message});
  }
}

//ACTUALIZAR UN BLOG
export const updateBlog = async (request, response) => {
  try {
    await BlogModel.update(request.body, 
      {
        where: {id: request.params.id}
      }
    );
    response.json({message: "Registro actualizado con exito"});
  } catch (error) {
      response.json({message: error.message});
  }
}
//ELIMINAR UN BLOG
export const deleteBlog = async (request, response) => {
  try {
    await BlogModel.destroy(request.body, 
      {
        where: {id: request.params.id}
      }
    );
    response.json({message: "Registro borrado con exito"});
  } catch (error) {
      response.json({message: error.message});
  }
}