import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesList from './Components/ArticlesList';
import DropdownBar from './Components/DropdownBar';
import Article from './Components/Article'

function App() {
  return (

    <div>
      <Header />
      <DropdownBar />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes >
    </div>

  )
}

export default App