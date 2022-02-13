import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import client from "client";

export const DeleteAction = ({ row, onDelete }) => {
  return (
    <IconButton
      color="warning"
      onClick={() => {
        client.delete(`/properties/${row.id}`).then(() => {
          onDelete();
        });
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};
