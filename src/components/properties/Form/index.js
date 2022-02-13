import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { typeProperties, TYPE_PROPERTIES } from "constantsApp";
import client from "client";
import OwnersField from "./OwnersField";

const useStyles = makeStyles((theme) => ({
  typeDocument: {
    marginTop: theme.spacing(1.5),
  },
}));

export default function PropertiesForm({ onSave }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [typeProperty, setTypeProperty] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [owners, setOwners] = useState([]);
  const [realEstateRegistration, setRealEstateRegistration] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reset = () => {
    setTypeProperty("");
    setName("");
    setName("");
  };

  const save = async () => {
    const res = await client.post("/properties", {
      name,
      type_property: typeProperty,
      address,
      real_estate_registration: realEstateRegistration,
      owners,
    });
    onSave?.(res.data);
    handleClose();
    reset();
  };
  console.log(owners);

  const title = "Crear Propiedad";
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Número de matrícula inmobiliaria"
            type="number"
            fullWidth
            variant="standard"
            value={realEstateRegistration}
            onChange={(e) => setRealEstateRegistration(e.target.value)}
          />
          <div className={classes.typeDocument}>
            <FormControl fullWidth>
              <InputLabel id="type-document-select-label">
                Tipo de predio
              </InputLabel>
              <Select
                labelId="type-document-select-label"
                id="demo-simple-select"
                value={typeProperty}
                label="Tipo de predio"
                onChange={(e) => {
                  setTypeProperty(e.target.value);
                }}
              >
                {typeProperties.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {typeProperty === TYPE_PROPERTIES.RURAL && (
              <TextField
                margin="dense"
                label="Nombre de la propiedad"
                type="text"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            {typeProperty === TYPE_PROPERTIES.URBAN && (
              <TextField
                margin="dense"
                label="Dirección de la propiedad"
                type="text"
                fullWidth
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            )}
            <OwnersField
              value={owners}
              onChange={(value) => {
                console.log(value);
                setOwners(value);
              }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={save}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
