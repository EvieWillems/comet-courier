<!-- 5 function findShipment(id) {
                        ~~ -->

<!-- shipment-service.ts:9:27 - error TS7006: Parameter 'id' implicitly has an 'any' type.

9 function describeShipment(id) {
                            ~~

shipment-service.ts:11:13 - error TS18048: 'shipment' is possibly 'undefined'.

11   return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
               ~~~~~~~~

shipment-service.ts:11:37 - error TS18048: 'shipment' is possibly 'undefined'.

11   return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
                                       ~~~~~~~~

shipment-service.ts:11:59 - error TS18048: 'shipment' is possibly 'undefined'.

11   return `${shipment.trackingId}: ${shipment.origin} -> ${shipment.destination}`;
                                                             ~~~~~~~~ -->

<!-- shipment-service.ts:14:33 - error TS7006: Parameter 'customerId' implicitly has an 'any' type.

14 function totalWeightForCustomer(customerId, statusFilter) {
                                   ~~~~~~~~~~

shipment-service.ts:14:45 - error TS7006: Parameter 'statusFilter' implicitly has an 'any' type.

14 function totalWeightForCustomer(customerId, statusFilter) {
                                               ~~~~~~~~~~~~ -->