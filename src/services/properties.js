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
export function deletePropertyOwner(id, owner) {
  return client.delete(`/properties/${id}/owners/${owner}`);
}
export function createPropertyOwners(id, owners) {
  return client.post(`/properties/${id}/owners`, { owners });
}
export function getPropertyOwnersAvailable(id) {
  return client.get(`/properties/${id}/owners/available`);
}
