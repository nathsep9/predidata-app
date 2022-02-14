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
import {
  createPropertyRoute,
  typePropertiesMap,
  TYPE_PROPERTIES,
} from "constantsApp";

export function PropertiesTable({ data, onDelete }) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Tipo de predio</TableCell>
            <TableCell align="right">
              Número de matrícula inmobiliaria
            </TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => {
            const { type_property: type } = row;
            const typeProperty = typePropertiesMap.get(type);
            const name =
              type === TYPE_PROPERTIES.URBAN ? row.address : row.name;
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {name}
                </TableCell>
                <TableCell align="right">
                  {typeProperty?.label || "--"}
                </TableCell>
                <TableCell align="right">
                  {row.real_estate_registration}
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    component={LinkBehavior}
                    href={createPropertyRoute(row.id)}
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

export default PropertiesTable;
