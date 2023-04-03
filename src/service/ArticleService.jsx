import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL

export const CreateArticle = (body) => {
  const config = {
    method: "post",
    url: `${apiUrl}/api/v1/Article/Create`,
    headers: {
      contentType: "application/json",
    },
    data: body,
  };

  console.log(body);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error creating article");
      alert("Error creating article");
    });
}

export const GetArticlesByCollection = (id) => {
  const config = {
    method: "get",
    url: `${apiUrl}/api/v1/Article/GetAllByCollection/${id}`
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error fetching articles by collection");
      alert("Error fetching articles by collection");
    });
}

export const GetArticleByID = (id) => {
  const config = {
    method: "get",
    url: `${apiUrl}/api/v1/Article/GetById/${id}`
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error fetching article by id");
      alert("Error fetching article by id");
    });
}