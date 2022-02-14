import client from "client";

export function getProperties() {
  return client.get("/properties");
}

export function getProperty(id) {
  return client.get(`/properties/${id}`);
}

export function deleteProperty(id) {
  return client.delete(`/properties/${id}`);
}
