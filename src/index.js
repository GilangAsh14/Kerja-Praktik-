import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/Login';
import About from './pages/About';
import Post from './pages/Post';
import Upload from './pages/Upload';
import DetailBerita from './pages/DetailBerita';
import Edit from './pages/Edit';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/Upload" element={<Upload />} />
        <Route path="/detail" element={<DetailBerita />} />
        <Route path="/edit" element={<Edit />} />
        {/* <Route path="deskripsi/:id" element={<Deskripsi />} /> */}
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
