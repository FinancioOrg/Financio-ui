import * as React from "react";
import FullArticleCard from "../../components/Article/FullArticleCard";
import { GetArticleByID } from "../../service/ArticleService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getData(id);
  }, []);

  const getData = async (id) => {
    await GetArticleByID(id).then((response) => {
      setData(response);
    });
  };

  return <FullArticleCard article={data} />;
}
