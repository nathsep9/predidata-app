export const ROUTES = {
  main: "/",
  owners: "/owners",
  properties: "/properties",
  owner: "/owners/:id",
  property: "/properties/:id",
};

export const createOwnerRoute = (id) => `/owners/${id}`;
export const createPropertyRoute = (id) => `/properties/${id}`;

export * from "./documents";
export * from "./properties";
