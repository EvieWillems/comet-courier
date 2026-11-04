
<!-- 2 import { shipments } from "./models"; -->
                            ~~~~~~~~~~

shipment-service.ts:4:23 - error TS7006: Parameter 'id' implicitly has an 'any' type.

4 function findShipment(id) {
                        ~~

shipment-service.ts:5:26 - error TS7006: Parameter 's' implicitly has an 'any' type.

5   return shipments.find((s) => s.id === id);
                           ~

shipment-service.ts:8:27 - error TS7006: Parameter 'id' implicitly has an 'any' type.

8 function describeShipment(id) {
                            ~~

shipment-service.ts:13:33 - error TS7006: Parameter 'customerId' implicitly has an 'any' type.

13 function totalWeightForCustomer(customerId, statusFilter) {
                                   ~~~~~~~~~~

shipment-service.ts:13:45 - error TS7006: Parameter 'statusFilter' implicitly has an 'any' type.

13 function totalWeightForCustomer(customerId, statusFilter) {
                                               ~~~~~~~~~~~~

shipment-service.ts:15:14 - error TS7006: Parameter 's' implicitly has an 'any' type.

15     .filter((s) => s.customerId === customerId && s.status === statusFilter)
                ~

shipment-service.ts:16:14 - error TS7006: Parameter 'total' implicitly has an 'any' type.

16     .reduce((total, s) => total + s.weightKg, 0);
                ~~~~~

shipment-service.ts:16:21 - error TS7006: Parameter 's' implicitly has an 'any' type.

16     .reduce((total, s) => total + s.weightKg, 0);
                       ~


## task 2

Decisions: constrained type by extends: id; if we hadn't used a generic, we would have lost the ability to apply the same find function to all three arrays.