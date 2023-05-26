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
      alert("Error creating the article");
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

export const GetArticleByID = (articleID, userID) => {
  const config = {
    method: "get",
    url: `${apiUrl}/api/v1/Article/GetByIdForUser/${articleID}/${userID}`
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error fetching article by id");
      alert("Error fetching article by id");
    });
}

export const GetTimeline = (userID) => {
  const config = {
    method: "get",
    url: `${apiUrl}/api/v1/Article/GetTimeline/${userID}`
  };

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error fetching article by id");
      alert("Error fetching article by id");
    });
}

export const LikeArticle = (_articleID, _userID) => {
  const body = {
    UserID: _userID,
    ArticleID: _articleID,
  };

  const config = {
    method: "post",
    url: `${apiUrl}/api/v1/Article/Like`,
    headers: {
      contentType: "application/json",
    },
    data: body,
  };

  console.log(body);

  return axios(config)
    .then((response) => response.data)
    .catch(() => {
      console.error("Error liking the article");
      alert("Error liking the article");
    });
}