import React from "react";
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

import { typeDocuments } from "constantsApp";
import client from "client";

const useStyles = makeStyles((theme) => ({
  typeDocument: {
    marginTop: theme.spacing(1.5),
  },
}));

export default function OwnersForm({ onSave }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [typeDocument, setTypeDocument] = React.useState("");
  const [name, setName] = React.useState("");
  const [document, setDocument] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const reset = () => {
    setTypeDocument("");
    setName("");
    setDocument("");
  };

  const save = async () => {
    const res = await client.post("/owners", {
      name,
      document,
      type_document: typeDocument,
    });
    onSave?.(res.data);
    handleClose();
    reset();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Crear Propietario
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Registrate</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <div className={classes.typeDocument}>
            <FormControl fullWidth>
              <InputLabel id="type-document-select-label">
                Tipo de documento
              </InputLabel>
              <Select
                labelId="type-document-select-label"
                id="demo-simple-select"
                value={typeDocument}
                label="Tipo de documento"
                onChange={(e) => {
                  setTypeDocument(e.target.value);
                }}
              >
                {typeDocuments.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              label="Documento"
              type="number"
              fullWidth
              variant="standard"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
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
