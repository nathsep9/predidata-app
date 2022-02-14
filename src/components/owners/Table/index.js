import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";

import { DeleteAction } from "./actions/DeleteAction";
import { LinkBehavior } from "components/LinkBehavior";
import { createOwnerRoute, typeDocumentsMap } from "constantsApp";

export function OwnersTable({ data, onDelete }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Tipo de documento</TableCell>
            <TableCell align="right">Número de documento</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const typeDocument = typeDocumentsMap.get(row.type_document);
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  {typeDocument?.label || "--"}
                </TableCell>
                <TableCell align="right">{row.document}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    component={LinkBehavior}
                    href={createOwnerRoute(row.id)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <DeleteAction
                    onDelete={() => {
                      onDelete?.(row);
                    }}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OwnersTable;
