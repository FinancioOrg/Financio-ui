import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout/PageLayout";
import NoContent from "./pages/NoContent/NoContent";
import NewArticle from "./pages/NewArticle/NewArticle";
import AllCollections from "./pages/Collections/AllCollections";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<AllCollections />} />
        <Route path="/newArticle" element={<NewArticle />} />
        <Route path="*" element={<NoContent/>}/>
      </Route>
    </Routes>
  );
}

export default App;
