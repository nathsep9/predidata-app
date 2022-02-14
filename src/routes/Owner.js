import { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import * as colors from "@mui/material/colors";
import { Navigate, useParams } from "react-router-dom";

import LoadingPage from "components/LoadingPage";
import { Container, Grid, Paper } from "@mui/material";
import { findTypeDocument, ROUTES } from "constantsApp";
import { deleteOwnerProperty, getOwner } from "services";
import PropertiesTable from "components/properties/Table";
import { AddProperties } from "components/Owner";

export function Owner() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const reload = useCallback(() => {
    setLoading(true);
    getOwner(id)
      .then((res) => {
        setData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    reload();
  }, [reload]);

  if (loading) return <LoadingPage />;
  if (!data) return <Navigate to={ROUTES.owners} />;
  const { name, document, type_document, properties } = data;
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
            {[
              {
                label: "Nombre",
                value: name,
              },
              {
                label: "Tipo del documento",
                value: indicator.label,
              },
              {
                label: "Documento",
                value: document,
              },
            ].map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="subtitle2" gutterBottom>
                  {item.label}
                </Typography>
                <Typography variant="body2">{item.value}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Grid container justifyContent="center">
        <Grid
          item
          xs="auto"
          sx={{
            margin: (theme) => theme.spacing(2),
          }}
        >
          <AddProperties
            id={id}
            onSave={(newData) => {
              setData({
                ...data,
                properties: [...data.properties, ...newData],
              });
            }}
          />
        </Grid>
      </Grid>
      <Paper
        sx={{
          padding: (theme) => theme.spacing(2),
          marginTop: (theme) => theme.spacing(2),
        }}
      >
        <PropertiesTable
          data={properties}
          onDelete={async (row) => {
            await deleteOwnerProperty(id, row.id);
            reload();
          }}
        />
      </Paper>
    </Container>
  );
}
