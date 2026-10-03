# Logistics & Shipment Management API System

A scalable backend API for managing shipments, warehouse operations, deliveries, tracking, notifications, and reports in a logistics ecosystem. Built with Node.js, TypeScript, Express, and MongoDB, this project is designed for real-world logistics workflows with secure authentication and role-based access control.

## Overview

This system provides a centralized API for logistics teams to:

- Register and authenticate users
- Manage shipment creation and status updates
- Assign shipments to warehouses and delivery workflows
- Track shipment progress in real time
- Send and manage notifications
- Generate operational reports
- Expose Swagger-based API documentation for testing and integration

## Key Features

- TypeScript-based backend for better maintainability and reliability
- JWT authentication with role-based authorization
- Support for customer, agent, and admin roles
- Shipment lifecycle management from creation to status tracking
- Warehouse management and shipment assignment flows
- Delivery and tracking modules for operational visibility
- Notification and reporting capabilities
- Swagger UI documentation for all API endpoints
- MongoDB integration using Mongoose
- CORS, Helmet, and request logging for production-ready API security

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- Swagger UI / Swagger JSDoc
- dotenv
- Helmet, CORS, Morgan

## Project Structure

```bash
logistics-shipment-management-api-system/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   ├── database.ts
│   │   └── swagger.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── role.middleware.ts
│   ├── modules/
│   │   ├── auth/
│   │   ├── shipment/
│   │   ├── warehouse/
│   │   ├── delivery/
│   │   ├── tracking/
│   │   ├── notification/
│   │   ├── report/
│   │   └── user/
│   ├── routes/
│   │   └── index.ts
│   └── utils/
├── .env
├── package.json
├── tsconfig.json
├── README.md
└── package-lock.json
```

## Modules Included

- Authentication: User registration and login
- Shipments: Create, track, and update shipment status
- Warehouses: Warehouse creation and assignment logic
- Delivery: Delivery workflow management
- Tracking: Shipment tracking records
- Notifications: Operational alerts and notifications
- Reports: Summary and reporting endpoints

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js 18 or newer
- npm or yarn
- MongoDB Atlas or a local MongoDB instance

## Installation

1. Clone the repository:

```bash
git clone https://github.com/QasimSigmaDeveloper/logistics-shipment-management-api-system.git
cd logistics-shipment-management-api-system
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the required environment variables:

```env
PORT=5000
DB_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
NODE_ENV=development
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

## Running the Application

### Development mode

```bash
npm run dev
```

The server starts on:

```bash
http://localhost:5000
```

### Production build

```bash
npm run build
npm start
```

## API Documentation

This project includes Swagger documentation for interactive API testing.

Open the following URL in your browser after starting the server:

```bash
http://localhost:5000/api-docs
```

## Base API URL

```bash
http://localhost:5000/api/v1
```

## Authentication

The API uses JWT-based authentication.

- Register a new user: `POST /api/v1/auth/register`
- Login a user: `POST /api/v1/auth/login`
- Protected routes require a valid bearer token

Roles supported in the application:

- `customer`
- `agent`
- `admin`

## Main API Endpoints

```bash
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/shipments
GET    /api/v1/shipments/my
GET    /api/v1/shipments/track/:trackingId
PATCH  /api/v1/shipments/:id/status
GET    /api/v1/warehouse
POST   /api/v1/warehouse
PUT    /api/v1/warehouse/:id/assign
GET    /api/v1/deliveries
POST   /api/v1/deliveries
GET    /api/v1/tracking
GET    /api/v1/reports
```

## Environment Variables

| Variable | Description |
| --- | --- |
| `PORT` | Port for the Express server |
| `DB_URL` | MongoDB connection string |
| `NODE_ENV` | Environment mode (`development`, `production`) |
| `JWT_ACCESS_SECRET` | Secret key for JWT access tokens |
| `JWT_REFRESH_SECRET` | Secret key for refresh token validation |

## Notes

- The project currently uses a development-oriented setup with `ts-node-dev` for hot reloading.
- API security is enforced through middleware for authentication and authorization.
- The repository is structured to support future extensions such as advanced delivery scheduling, admin dashboards, and analytics modules.

## License

This project is licensed under the ISC License.

## Author

- M.Qasim

## Contributing

Contributions are welcome. If you want to improve the project, fork the repository, make your changes, and submit a pull request.
