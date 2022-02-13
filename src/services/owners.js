import client from "client";

export function getOwners() {
  return client.get("/owners");
}
