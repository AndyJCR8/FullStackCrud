
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

//const URI = "http://172.17.223.27:8000/blogs/";
const URI = "http://localhost:8000/blogs/";

export default function EditBlog() {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, { title: title, content: content });
    navigate('/');
  }

  const getBlogId = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setContent(res.data.content);
  }

  useEffect(() => {
    getBlogId();
  }, []);

  return (
    <div>
      <h3>Edit POST</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control"                        
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">Content</label>
          <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              type="text"
              className="form-control"
          />
        </div>            
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
  </div>
  )
}
