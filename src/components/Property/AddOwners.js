import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { createPropertyOwners } from "services";
import OwnersField from "./OwnersField";

export const AddOwners = ({ id, onSave }) => {
  const [open, setOpen] = useState(false);
  const [owners, setOwners] = useState([]);
  const handleClose = () => {
    setOpen(false);
  };
  const reset = () => {
    setOwners([]);
  };
  const save = async () => {
    const res = await createPropertyOwners(id, owners);
    handleClose();
    onSave?.(res.data);
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
        Agregar Propietario
      </Button>

      <Dialog
        fullWidth
        open={open}
        onClose={() => {
          setOpen(false);
          handleClose();
        }}
      >
        <DialogTitle>Agregar propietario</DialogTitle>
        <DialogContent>
          <OwnersField
            property={id}
            value={owners}
            onChange={(newValue) => setOwners(newValue)}
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
