import * as React from 'react';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import {GetArticlesByCollection} from '../../service/ArticleService';
import { useState, useEffect } from "react";

const articles = [
    {
      id: 1,
      title: 'Shrimp and Chorizo Paella',
      subheader: 'September 14, 2016',
      imageUrl: 'https://howtodrawforkids.com/wp-content/uploads/2022/07/how-to-draw-an-open-book.jpg',
      content:
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    },
    {
      id: 2,
      title: 'Chicken Curry',
      subheader: 'October 1, 2016',
      imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2019/11/Creamy-Thai-Chicken-Curry_EXPS_THCA19_196212_C10_09_4b-696x696.jpg',
      content:
        'This delicious chicken curry is a family favorite and can be made in under 30 minutes. Serve with rice and naan bread for a complete meal.',
    },
    {
      id: 3,
      title: 'Spaghetti Bolognese',
      subheader: 'November 5, 2016',
      imageUrl: 'https://www.saltandlavender.com/wp-content/uploads/2019/07/spaghetti-bolognese-recipe-1.jpg',
      content:
        'This classic Italian dish is a crowd pleaser and easy to make. Cook the spaghetti al dente and top with freshly grated Parmesan cheese.',
    },
    {
      id: 4,
      title: 'Grilled Salmon',
      subheader: 'December 10, 2016',
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2021/03/grilled-salmon-33.jpg',
      content:
        'This healthy and flavorful dish is perfect for summer grilling. Marinate the salmon in soy sauce, ginger, and garlic for extra flavor.',
    },
    {
      id: 5,
      title: 'Beef Tacos',
      subheader: 'January 15, 2017',
      imageUrl: 'https://www.ambitiouskitchen.com/wp-content/uploads/2019/07/Healthy-Ground-Beef-Tacos-2.jpg',
      content:
        'These easy and delicious tacos are a family favorite. Serve with shredded lettuce, diced tomatoes, and a dollop of sour cream.',
    },
    {
      id: 6,
      title: 'Roast Chicken',
      subheader: 'February 20, 2017',
      imageUrl: 'https://www.onceuponachef.com/images/2018/02/Roast-Chicken-1024x773.jpg',
      content:
        'This classic Sunday dinner is a comforting and satisfying meal. Rub the chicken with butter and herbs for a crispy skin and juicy meat.',
    },
    {
      id: 7,
      title: 'Pesto Pasta',
      subheader: 'March 25, 2017',
      imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2014/07/pesto-pasta12..jpg',
      content:
        'This simple and flavorful pasta dish is perfect for a weeknight dinner. Toss cooked pasta with pesto sauce and top with shaved Parmesan cheese.',
    }
]

export default function AllArticles() {
  const [data, setData] = useState([]);
  const [page, setPage] = React.useState(1);
  const articlesPerPage = 4;
  const pageCount = Math.ceil(articles.length / articlesPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    getData('641988e35e7dbd5b89a54b0f');
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
        <React.Fragment>
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
        </React.Fragment>
      )}
    </div>
  );
}