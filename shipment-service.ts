// shipment-service.ts (before)
// import type { Shipment } from "/models";
import { shipments } from "./models";

function findShipment(id) {
  return shipments.find((s) => s.id === id);
}

function describeShipment(id) {
  const shipment = findShipment(id);
  return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
}

function totalWeightForCustomer(customerId, statusFilter) {
  return shipments
    .filter((s) => s.customerId === customerId && s.status === statusFilter)
    .reduce((total, s) => total + s.weightKg, 0);
}

console.log(describeShipment("s1"));
console.log(totalWeightForCustomer("c1", "in_transit"));