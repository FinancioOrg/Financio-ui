import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layout/PageLayout";
import NoContent from "./pages/NoContent/NoContent";
import NewArticle from "./pages/Articles/NewArticle";
import AllCollections from "./pages/Collections/AllCollections";
import Collection from "./pages/Collections/Collection";
import Article from "./pages/Articles/Article";
import CallbackPage from "./pages/Callback/Callback";
import { withAuthenticationRequired } from "@auth0/auth0-react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collection/:id" element={<Collection />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/collections" element={<AllCollections />} />
        <Route path="/newArticle" element={<NewArticle />} />
        <Route path="*" element={<NoContent/>}/>
      </Route>
    </Routes>
  );
}

export default withAuthenticationRequired(App, {
  onRedirecting: () => <p>Loading...</p>,
});
