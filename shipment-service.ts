// shipment-service.ts (before)
import type { Shipment } from "./models";
import { shipments, drivers, customers } from "./models";

function findShipment(id: string) {
  return shipments.find((s) => s.id === id);
}

function describeShipment(id: string) {
  const shipment = findShipment(id);
  if (!shipment){
    return "No shipment found"
  }
  return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
}

function totalWeightForCustomer(customerId: string, statusFilter: "pending" | "in_transit" | "delivered" | "delayed") {
  return shipments
    .filter((s) => s.customerId === customerId && s.status === statusFilter)
    .reduce((total, s) => total + s.weightKg, 0);
}

function findById<T extends {id:string}>(arr:T[], id:string): T|undefined {
    return arr.find((s) => s.id === id);
};



console.log(describeShipment("s1"));
console.log(totalWeightForCustomer("c1", "in_transit"));
console.log(findById(shipments,"s1"))
console.log(findById(drivers,"d1"))
console.log(findById(customers,"c1"))