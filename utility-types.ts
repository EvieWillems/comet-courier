import type {Shipment,Driver,Customer} from "./models"

export type updateShipment = Partial<Pick<Shipment, "status"|"destination"|"weightKg">>
export type driverProfile = Pick<Driver, "name"|"vehicleType">
export type newCustomer = Omit<Customer, "id">



// An "update shipment" payload for an internal dispatcher tool. Only status,
//  destination and weightKg can ever change, and any subset of them can be present on one update.
// A "driver profile" shown to customers who track their delivery. It shows 
// only the driver's name and vehicleType. It must never show licensePlate, even if Driver gains new fields later.
// A "new customer" signup payload. It has every field of Customer except id, which the system generates afterwards.