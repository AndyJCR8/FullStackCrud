import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./logo.svg";
import ShowBlogs from './blog/ShowBlogs';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className='App'>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt='logo'/>
      </header> */}
      <Router>
        <Routes>
          <Route path='/' element={<ShowBlogs/>}/>
          <Route path='/create' element={<CreateBlog/>}/>
          <Route path='/edit/:id' element={<EditBlog/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
