import ArticleCard from '../../components/Article/ArticleCard';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import {GetArticlesByCollection} from '../../service/ArticleService';
import { useState, useEffect, Fragment } from "react";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const articlesPerPage = 4;
  const pageCount = Math.ceil(data.length / articlesPerPage);
  const id = "64479869997e18d8d9e47537";

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getData(id);
  }, []);


  const getData = async (id) => {
    await GetArticlesByCollection(id).then((response) => {
      setData(response);
    });
  };
  const startIndex = (page - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const dataSliced = data.slice(startIndex, endIndex);

return (
    <div>
      {data.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Fragment>
          <Grid
            container
            spacing={2}
            sx={{
              paddingX: '10%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {dataSliced.map((article) => (
              <Grid item xs={12} key={article.id}>
                <ArticleCard article={article} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={pageCount}
            page={page}
            onChange={handleChange}
            sx={{
              my: 2,
              display: 'flex',
              justifyContent: 'center',
            }}
          />
        </Fragment>
      )}
    </div>
  );
}