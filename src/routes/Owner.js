import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as colors from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Navigate, useParams } from "react-router-dom";

import client from "client";
import LoadingPage from "components/LoadingPage";
import { Container, Grid, Paper } from "@mui/material";
import { findTypeDocument, ROUTES } from "constantsApp";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function Owner() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("Owner", id);
    setLoading(true);
    client
      .get(`/owners/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (loading) return <LoadingPage />;
  if (!data) return <Navigate to={ROUTES.owners} />;
  const { name, type_document } = data;
  const indicator = findTypeDocument(type_document);
  const arrayColors = Object.values(colors);
  const random = Math.floor(Math.random() * arrayColors.length);
  const randomColor = arrayColors[random];

  return (
    <Container
      sx={{
        marginTop: "50px",
      }}
    >
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: randomColor[500] }} aria-label="recipe">
              {name[0]}
            </Avatar>
          }
          title={
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
          }
        />

        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle1" gutterBottom>
                Nombre
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Documento
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            {indicator.label}
          </Typography>
        </CardContent>
      </Card>
      <Paper
        sx={{
          padding: (theme) => theme.spacing(2),
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        tgfgfgfgcf
      </Paper>
    </Container>
  );
}
