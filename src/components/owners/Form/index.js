import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { typeDocuments } from "constantsApp";
import client from "client";

export default function OwnersForm() {
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

  const save = () => {
    console.log(typeDocument, name, document);
    client.post("/owner", {
      name,
      document,
      type_document: typeDocument,
    });
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
          />
          <TextField
            margin="dense"
            label="Documento"
            type="number"
            fullWidth
            variant="standard"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={save}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
