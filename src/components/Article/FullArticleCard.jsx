import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArticleContent from "./ArticleContent";
import { LikeArticle } from "../../service/ArticleService";

export default function FullArticleCard(props) {
  const [likedByUser, setLikedByUser] = React.useState(false);

  React.useEffect(() => {
    if (props.article) {
      setLikedByUser(props.article.likedByUser);
    }
  }, [props.article]);

  const likeArticle = async () => {
    await LikeArticle(props.article.id, props.user);
    setLikedByUser(true);
  };

  const unlikeArticle = async () => {
    await LikeArticle(props.article.id, props.user);
    setLikedByUser(false);
  };

  const data = props.article;
  return (
    <>
      {props.article && (
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid lightgrey",
          }}
        >
          {console.log(likedByUser)}
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
          <CardContent sx={{ flexGrow: 1 }}>
            <ArticleContent htmlContent={props.article.text} />
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              onClick={likedByUser ? unlikeArticle : likeArticle}
              aria-label="add to favorites"
            >
              {likedByUser ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </>
  );
}
