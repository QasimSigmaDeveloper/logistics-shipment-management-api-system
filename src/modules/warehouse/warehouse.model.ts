import { Schema, model } from "mongoose";
import { IWarehouse } from "./warehouse.interface";

const warehouseSchema = new Schema<IWarehouse>({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    capacity:{
        type:Number,
        required:true,
    },
    currentLoad:{
        type:Number,
        default:0,
    },
    shipments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Shipment",
        }
    ]
},
    {
        timestamps:true,
    }
)

const Warehouse = model<IWarehouse>("Warehouse",warehouseSchema);
export default Warehouse;