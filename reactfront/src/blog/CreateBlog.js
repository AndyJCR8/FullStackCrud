import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const URI = "http://172.17.223.27:8000/blogs/";

export default function CreateBlog() {
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const store = async e => {
    e.preventDefault();
    await axios.post(URI, {title: title, content: content});
    navigate('/');
  }

  return (
    <div>
      <h3>Create POST</h3>
      <form onSubmit={store}>
        <div className='mb-3'>
          <label className='form-label'>Title</label>
          <input
              value={title}
              onChange={ (e)=> setTitle(e.target.value)} 
              type="text"
              className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Content</label>
          <textarea
              value={content}
              onChange={ (e)=> setContent(e.target.value)} 
              type="text"
              className='form-control'
          />
        </div>  
        <button type='submit' className='btn btn-primary'>Store</button>                  
      </form> 
    </div>
  )
}
