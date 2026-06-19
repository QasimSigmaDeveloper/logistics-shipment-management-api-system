import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Logistics & Shipment Management API",
      version: "1.0.0",
      description:
        "A professional backend API for managing shipments, warehouses, deliveries, tracking, notifications and reports.",
      contact: {
        name: "Muhammad Qasim",
        email: "qasim.official137@gmail.com",
      },
    },

    servers: [
      {
        url: "http://localhost:5000/api/v1",
        description: "Development Server",
      },
    ],

    tags: [
      {
        name: "Authentication",
        description: "User authentication APIs",
      },
      {
        name: "Shipments",
        description: "Shipment management APIs",
      },
      {
        name: "Tracking",
        description: "Shipment tracking APIs",
      },
      {
        name: "Warehouses",
        description: "Warehouse management APIs",
      },
      {
        name: "Deliveries",
        description: "Delivery agent APIs",
      },
      {
        name: "Notifications",
        description: "User notification APIs",
      },
      {
        name: "Reports",
        description: "Admin reports APIs",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        RegisterUser: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Ali Khan",
            },
            email: {
              type: "string",
              example: "ali@gmail.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
            role: {
              type: "string",
              example: "customer",
            },
          },
        },

        LoginUser: {
          type: "object",
          properties: {
            email: {
              type: "string",
              example: "ali@gmail.com",
            },
            password: {
              type: "string",
              example: "123456",
            },
          },
        },

        Shipment: {
          type: "object",
          properties: {
            senderName: {
              type: "string",
              example: "Ahmed",
            },
            senderPhone:{
              type:"string",
              example:"0312-3431843"
            },
            receiverName: {
              type: "string",
              example: "Bilal",
            },
            receiverPhone:{
              type:"string",
              example:"0312-3431843"
            },
            packageType: {
              type: "string",
              example: "Document",
            },
            weight: {
              type: "number",
              example: 2,
            },
            address: {
              type: "string",
              example: "Lahore Pakistan",
            },
          },
        },
        Warehouse: {
          type: "object",
            properties: {
               name: {
                type: "string",
                 example: "Lahore Main Warehouse",
             },
             location: {
                 type: "string",
                example: "Lahore",
              },
              capacity: {
                 type: "number",
                  example: 100,
            },
          },
        },
        AssignDelivery: {
            type: "object",
            properties: {
              shipmentId: {
                type: "string",
                example: "689abc123",
              },
              agentId: {
                type: "string",
                example: "689xyz456",
              },
            },
          },
          DeliveryProof: {
            type: "object",
            properties: {
              proof: {
                type: "string",
                example: "https://image-url.com/proof.jpg",
              },
            },
          },
          UpdateShipmentStatus: {
          type: "object",
          properties: {
            status: {
              type: "string",
              example: "OUT_FOR_DELIVERY",
            },
            note: {
              type: "string",
              example: "Package reached customer city",
            },
          },
        },
        
      },
    },

    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [
    "./src/modules/**/*.ts",
  ],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;


