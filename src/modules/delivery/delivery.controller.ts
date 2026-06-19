import { Request, Response } from "express";
import { DeliveryService } from "./delivery.service";
import sendResponse from "../../utils/sendResponse";


const assignShipment = async (
  req: Request,
  res: Response
) => {

  const result =
    await DeliveryService.assignShipment(
      req.body.shipmentId,
      req.body.agentId
    );

    sendResponse(res,{
        success:true,
        statusCode:201,
        message:"Shipment Assign to Agent",
        data:result,
    })
};



const myShipments = async (
  req: any,
  res: Response
) => {

  const result =
    await DeliveryService.getAgentShipments(
      req.user.id
    );
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Your Shipments",
        data:result,
    })
};



const submitProof = async (
  req: Request,
  res: Response
) => {

  const result =
    await DeliveryService.submitProof(
      req.params.id as string,
      req.body.proof
    );
    sendResponse(res,{
        success:true,
        statusCode:200,
        message:"Proof Submit Successfully",
        data:result,
    })
};



export const DeliveryController = {
  assignShipment,
  myShipments,
  submitProof,
};