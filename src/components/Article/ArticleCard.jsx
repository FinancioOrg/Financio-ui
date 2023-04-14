import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export default function ArticleCard(props) {
    const navigate = useNavigate();

    function handleNavigate(path) {
      return function(event) {
        navigate(path);
      };
    }

    return (
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '1px solid lightgrey' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={props.article.title}
          subheader={props.article.date}
        />
        {/* <CardMedia
          component="img"
          height="300"
          image="https://howtodrawforkids.com/wp-content/uploads/2022/07/how-to-draw-an-open-book.jpg"
          alt="Paella dish"
          sx={{ objectFit: 'cover' }}
        /> */}
        <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h4" color="text.secondary">
            {props.article.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.article.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Button variant="contained" onClick={handleNavigate("/article/"+props.article.id)}>Read</Button>
      </Card>
    );
  }