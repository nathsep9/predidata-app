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
import { ROUTES, typePropertiesMap } from "constantsApp";
import { deletePropertyOwner, getProperty } from "services";
import { AddOwners } from "components/Property";
import OwnersTable from "components/owners/Table";
import { getLocation } from "utils";

export function Property() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const reload = useCallback(() => {
    setLoading(true);
    getProperty(id)
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
  if (!data) return <Navigate to={ROUTES.properties} />;
  const { type_property, owners, real_estate_registration } = data;
  const type = typePropertiesMap.get(type_property);
  const arrayColors = Object.values(colors);
  const random = Math.floor(Math.random() * arrayColors.length);
  const randomColor = arrayColors[random];

  const location = getLocation(data);
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
              {location[0]}
            </Avatar>
          }
          title={
            <Typography variant="h6" gutterBottom>
              {location}
            </Typography>
          }
        />
        <CardContent>
          <Grid container>
            {[
              {
                label: "Número inmobiliario",
                value: real_estate_registration,
              },
              {
                label: "Ubicación",
                value: location,
              },
              {
                label: "Tipo del predio",
                value: type.label,
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
          <AddOwners
            id={id}
            onSave={(newData) => {
              setData({
                ...data,
                owners: [...data.owners, ...newData],
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
        <OwnersTable
          data={owners}
          onDelete={async (row) => {
            await deletePropertyOwner(id, row.id);
            reload();
          }}
        />
      </Paper>
    </Container>
  );
}
