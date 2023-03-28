import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

const CollectionGrid = () => {
  const collections = [
    {
      title: "Collection 1",
      image:
        "https://howtodrawforkids.com/wp-content/uploads/2022/07/how-to-draw-an-open-book.jpg",
    },
    {
      title: "Collection 2",
      image:
        "https://howtodrawforkids.com/wp-content/uploads/2022/07/how-to-draw-an-open-book.jpg",
    },
    {
      title: "Collection 3",
      image:
        "https://howtodrawforkids.com/wp-content/uploads/2022/07/how-to-draw-an-open-book.jpg",
    },
    {
      title: "Collection 4",
      image:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg",
    },
  ];

  const navigate = useNavigate();

  function handleClick(event) {
    navigate("/newArticle");
  }

  return (
    <div style={{ marginTop: "32px" }}>
      <SearchBar searchSubject={"collections"}/>
      <div style={{ marginTop: "32px" }}>
        <Grid container spacing={2}>
          {collections.map((collection, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={collection.image}
                  title={collection.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {collection.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleClick}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CollectionGrid;
