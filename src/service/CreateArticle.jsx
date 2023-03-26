import axios from "axios";
export default function createArticle(body) {
  const config = {
    method: "post",
    url: "https://localhost:7074/api/v1/Article/Create",
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