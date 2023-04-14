import axios from "axios";

const apiUrl = process.env.REACT_APP_BACKEND_URL

export const GetAllCollections = () => {
    const config = {
      method: "get",
      url: `${apiUrl}/api/v1/Collection/GetAll`
    };
  
    return axios(config)
      .then((response) => response.data)
      .catch(() => {
        console.error("Error fetching all collections");
        alert("Error fetching all collections");
      });
  }
  