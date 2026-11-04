// shipment-service.ts (before)
import type { Shipment, Driver, Customer } from "./models";
import { shipments, drivers, customers } from "./models";

function findShipment(id: string) {
  return shipments.find((s) => s.id === id);
}

function describeShipment(id: string) {
  const shipment = findShipment(id);
  if (!shipment) {
    return "No shipment found"
  }
  return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
}

function totalWeightForCustomer(customerId: string, statusFilter: "pending" | "in_transit" | "delivered" | "delayed") {
  return shipments
    .filter((s) => s.customerId === customerId && s.status === statusFilter)
    .reduce((total, s) => total + s.weightKg, 0);
}

function findById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find((s) => s.id === id);
};


type ServiceResult<T> = { status: "success"; data: T } | { status: "fail"; msg: string }

function fetchShipment(id: string): ServiceResult<Shipment>{
  let shipment: Shipment | undefined = findById(shipments,id)

  if(shipment){
    return {status: "success", data: shipment}
  }
  return {status: "fail", msg: "No shipment found"}
}

function fetchDriver(id: string): ServiceResult<Driver>{
  let driver: Driver | undefined = findById(drivers,id)

  if(driver){
    return {status: "success", data: driver}
  }
  return {status: "fail", msg: "No driver found"}
}

function fetchCustomer(id: string): ServiceResult<Customer>{
  let customer: Customer | undefined = findById(customers,id)

  if(customer){
    return {status: "success", data: customer}
  }
  return {status: "fail", msg: "No customer found"}
}



function describeResult(serviceResult :ServiceResult<Driver | Customer | Shipment>): string{
  if(serviceResult.status === "success"){
    let describeString = ""
    for(const [key,value] of Object.entries(serviceResult.data)){
      describeString += `${key}: ${value} \n`
    }
    return describeString;
}
return serviceResult.msg
}



console.log(describeShipment("s1"));
console.log(totalWeightForCustomer("c1", "in_transit"));
console.log(findById(shipments, "s1"))
console.log(findById(drivers, "d1"))
console.log(findById(customers, "c1"))
console.log(describeResult(fetchShipment("s1")))