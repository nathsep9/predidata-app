import client from "client";

export function getOwners() {
  return client.get("/owners");
}

export function getOwner(id) {
  return client.get(`/owners/${id}`);
}

export function deleteOwner(id) {
  return client.delete(`/owners/${id}`);
}

export function deleteOwnerProperty(id, property) {
  return client.delete(`/owners/${id}/properties/${property}`);
}
export function createOwnerProperties(id, properties) {
  return client.post(`/owners/${id}/properties`, { properties });
}
export function getOwnerPropertiesAvailable(id) {
  return client.get(`/owners/${id}/properties/available`);
}
