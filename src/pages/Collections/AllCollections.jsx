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
import { GetAllCollections } from "../../service/CollectionService";

const CollectionGrid = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();

  function handleNavigate(path) {
    return function(event) {
      navigate(path);
    };
  }

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await GetAllCollections().then((response) => {
      setData(response);
    });
  };

  return (
    <div style={{ marginTop: "32px" }}>
      <SearchBar searchSubject={"collections"}/>
      <div style={{ marginTop: "32px" }}>
        <Grid container spacing={2}>
          {data.map((collection, index) => (
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
                  image="https://howtodrawforkids.com/wp-content/uploads/2022/07/how-to-draw-an-open-book.jpg"
                  title={collection.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {collection.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={handleNavigate("/collection/" + collection.id)}>
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
