import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from '../Components/Header'
import ArticlesList from '../Components/ArticlesList';
import DropdownBar from '../Components/DropdownBar';

function App() {
  const [articles, setArticles] = useState([])

  return (
    <>
      <div>
        <Header />
        <DropdownBar />
        <Routes>
          <Route path="/" element={< ArticlesList articles={articles} setArticles={setArticles} />} />
        </Routes>
      </div>
    </>
  )
}

export default App
