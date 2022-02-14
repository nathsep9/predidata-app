import { TYPE_PROPERTIES } from "constantsApp";

export const getLocation = ({ type_property, name, address }) => {
  return type_property === TYPE_PROPERTIES.URBAN ? address : name;
};
