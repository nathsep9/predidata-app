import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { createOwnerProperties } from "services";
import PropertiesField from "./PropertiesField";

export const AddProperties = ({ id, onSave }) => {
  const [open, setOpen] = useState(false);
  const [properties, setProperties] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  const reset = () => {
    setProperties([]);
  };
  const save = async () => {
    const res = await createOwnerProperties(id, properties);
    onSave?.(res.data);
    handleClose();
    reset();
  };

  return (
    <>
      <Button
        variant="contained"
        display="flex"
        justifyContent="end"
        onClick={() => {
          setOpen(!open);
        }}
      >
        Agregar Predio
      </Button>

      <Dialog
        fullWidth
        open={open}
        onClose={() => {
          setOpen(false);
          handleClose();
        }}
      >
        <DialogTitle>Agregar Predio</DialogTitle>
        <DialogContent>
          <PropertiesField
            owner={id}
            value={properties}
            onChange={(newValue) => setProperties(newValue)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={save}>Guardar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
