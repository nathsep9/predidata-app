import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

export const DeleteAction = ({ onDelete }) => {
  return (
    <IconButton
      color="warning"
      onClick={() => {
        onDelete();
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};
