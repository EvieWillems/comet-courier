import randomstring from "randomstring"
import { hri } from "human-readable-ids"
import { findById, ServiceResult } from "./shipment-service"
import type { Shipment, Customer, Driver } from "./models"
import {shipments} from "./models"


function updateEntity<T extends {id:string}>(arr: T[], update:Partial<T>, id:string): T[] {

    let target: T|undefined = findById(arr,id);
    const arrOut = [];
    if (target) {
        for (let i = 0;i<arr.length;i++){
            arrOut.push(arr[i]);
            if (id === arr[i].id) {
                for(const [key,value] of Object.entries(update)) {
                    arrOut[i]={...arr[i],...update};
                }
            }
        }
    }
    return arrOut;
};


const updatedArray: Shipment[] = updateEntity(shipments,{status:"in_transit"},"s2")

console.log(updatedArray)