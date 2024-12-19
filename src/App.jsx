import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList';
import DropdownBar from './Components/DropdownBar';
import { CommentsContext } from "./Contexts/CommentsContext";

import Article from './Components/Article';


function App() {
  const [comments, setComments] = useState([]);
  return (

    <div>

      <Header />
      <DropdownBar />
      <CommentsContext.Provider value={{ comments, setComments }}>
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<Article />} />
        </Routes>
      </CommentsContext.Provider>

    </div>

  );
}

export default App;
