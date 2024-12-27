import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList';
import { CommentsContext } from "./Contexts/CommentsContext";
import '../src/css/App.css'
import TopicsList from './Components/TopicsList';
import Article from './Components/Article';


function App() {
  const [comments, setComments] = useState([]);
  return (

    <div>

      <Header />

      <CommentsContext.Provider value={{ comments, setComments }}>
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/home" element={<ArticlesList />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/topics" element={<TopicsList />} />
        </Routes>
      </CommentsContext.Provider>

    </div>

  );
}

export default App;
