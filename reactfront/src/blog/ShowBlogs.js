import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const URI = "http://172.17.223.27:8000/blogs/";

export default function ShowBlogs() {

  const [blogs, setBlogs] = useState([]);
  
  const deleteBlog = async (id) => {
    const res = await axios.delete(`${URI}${id}`);
    setBlogs(res.data);
  };

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get(URI);
      setBlogs(res.data);
    };

    getBlogs();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Link to="/create" className="btn btn-primary">Crear</Link>
          <table className="table-primary">
            <thead>
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                blogs.map((blog) => {

                  return (
                    <>
                      <tr key={ blog.id }></tr>
                      <td>{ blog.title }</td>
                      <td>{ blog.content }</td>
                      <td>
                        <Link to={`/edit/${blog.id}`} className="btn btn-info">info</Link>
                        <button onClick={() => deleteBlog(blog.id)} className="btn btn-danger">
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
