import * as React from "react";
import FullArticleCard from "../../components/Article/FullArticleCard";
import { GetArticleByID } from "../../service/ArticleService";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Article() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  const { user } = useAuth0();
  const userId = user.sub.split("|")[1];

  useEffect(() => {
    getData(id, userId);
  }, []);

  const getData = async (id, userId) => {
    await GetArticleByID(id, userId).then((response) => {
      setData(response);
    });
  };

  return <FullArticleCard article={data} user={userId}/>;
}
