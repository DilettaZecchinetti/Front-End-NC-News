import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList';
import { CommentsContext } from "./Contexts/CommentsContext";
import '../src/css/App.css'
import Article from './Components/Article';
import { ArticlesByTopic } from './Components/ArticlesByTopic';
import Users from './Components/Users';
import { UsersProvider } from './Contexts/UsersContext';


function App() {
  const [comments, setComments] = useState([]);
  return (

    <div>
      <UsersProvider>
        <Header />



        <CommentsContext.Provider value={{ comments, setComments }}>

          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/home" element={<ArticlesList />} />
            <Route path="/articles/:article_id" element={<Article />} />
            <Route path="/topics/:topic" element={<ArticlesByTopic />} />
            <Route path="/users" element={<Users />} />
          </Routes>

        </CommentsContext.Provider>
      </UsersProvider>
    </div >

  );
}

export default App;
