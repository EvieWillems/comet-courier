// models.ts
export interface Shipment {
  id: string;
  trackingId: string;
  origin: string;
  destination: string;
  weightKg: number;
  status: "pending" | "in_transit" | "delivered" | "delayed";
  customerId: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  tier: "standard" | "premium";
}

export interface Driver {
  id: string;
  name: string;
  vehicleType: "van" | "bike" | "truck";
  licensePlate: string;
  activeShipmentId?: string;
}

export const shipments: Shipment[] = [
  { id: "s1", trackingId: "CC-1001", origin: "Leeds", destination: "Bristol", weightKg: 4.2, status: "in_transit", customerId: "c1" },
  { id: "s2", trackingId: "CC-1002", origin: "Leeds", destination: "Glasgow", weightKg: 1.1, status: "pending", customerId: "c2" },
  { id: "s3", trackingId: "CC-1003", origin: "Leeds", destination: "Cardiff", weightKg: 8.6, status: "delayed", customerId: "c1" },
];

export const customers: Customer[] = [
  { id: "c1", name: "Amara Diallo", email: "amara@example.com", tier: "premium" },
  { id: "c2", name: "Priya Shah", email: "priya@example.com", tier: "standard" },
];

export const drivers: Driver[] = [
  { id: "d1", name: "Reef Okafor", vehicleType: "van", licensePlate: "CC01 REF" },
  { id: "d2", name: "Juno Marsh", vehicleType: "bike", licensePlate: "CC02 JNO", activeShipmentId: "s1" },
];