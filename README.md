# Limited Time Deal REST API

This project is a *Limited Time Deal* system that allows sellers to offer deals for a limited time and a set number of items. Users can claim deals as long as the time hasn't expired and the items are still available. The project demonstrates how to create a REST API using Express.js in a modular structure with data stored in a JSON file.

## Features

- *Create a Deal*: Sellers can create a deal with a specific price and the number of items available.
- *Get All Deals* : Fetches a list of all the current deals in the system.
- *Get Deal by ID*: Fetches a specific deal using its ID. 
- *End a Deal*: Sellers can manually end a deal.
- *Delete a Deal*: Removes a deal from the system.
- *Update Deal*: Increase the number of items available for the deal.
- *Claim a Deal*: Users can claim an available deal within the time limit.
- *Error Handling*: Comprehensive error handling for invalid requests.
- *JSON Data Storage*: Data is stored and manipulated using a simple JSON file, no database required.

## Real-World Applications

This system can be integrated into e-commerce platforms, where sellers want to promote flash sales or limited-time offers. It also provides a base for scaling the project with features like:
- User authentication
- Integration with payment gateways
- Scheduling automated deals
- Notifications and tracking of deal status.

## Project Structure

├── index.js
├── config
│   └── deal.json
├── controllers
│   ├── claimDealController.js
│   ├── createDealController.js
│   ├── endDealController.js
│   ├── getDealController.js
├── services
│   ├── claimDealService.js
│   ├── createDealService.js
│   ├── endDealService.js
│   ├── getDealService.js
├── routes
│   ├── dealRouter.js
├── middlewares
│   └── dealMiddleware.js
└── utils
    └── dealData.js

- *app.js*: The main entry point for the Express application.
- *routes/dealRouter.js*: Defines the API routes related to deals.
- *controllers/Controller.js*: Handles the request/response logic for deals.
- *services/Service.js*: Handles the business logic and data manipulation.
- *middlewares/dealMiddleware.js*: Middleware functions for handling request validation.
- *utils/dealData.js*: Helper functions for reading and writing to the JSON file.

## API Endpoints

### 1. Get all the Deals
- *Endpoint*: /api/deals/
- *Method*: GET
- *Description*: Fetches all the deals that are in the DB.

### 2. Get the Deal with Deal Id
- *Endpoint*: /api/deals/:dealId
- *Method*: GET
- *Description*: Fetches the deal of that particular deal Id.

### 3. Create a Deal
- *Endpoint*: /api/deals/create
- *Method*: POST
- *Description*: Create a new deal with ID,price, End Time, Claimed Items, Active and Maximum Items. But it only takes price, maxItems and endTime from the request.
- *Body*:
  json
  {
    "price": 100,
    "maxItems": 20,
    "endTime": 2024-15-07T09:52:07.770Z 
  }
  
### 4. End a Deal
- *Endpoint*: /api/deals/end/:dealId
- *Method*: POST
- *Description*: Makes the deal inactive by its ID.

### 5. Delete a Deal
- *Endpoint*: /api/deals/delete/:dealId
- *Method*: Delete
- *Description*: Deletes the deal of that particular deal ID.

### 6. Update a Deal
- *Endpoint*: /api/deals/update/:dealId
- *Method*: PUT
- *Description*: Update the number of items available in a deal.
- *Body*:
  json
  {
    "maxItems": 30,
    "price"   : 1200,
    "endTime" : 2024-25-07T09:52:07.770Z 

  }
  
### 7. Claim a Deal
- *Endpoint*: /api/deals/claim/:dealId
- *Method*: POST
- *Description*: Claim a deal if the time has not expired and items are still available.

## Setup and Installation

### Prerequisites

- Node.js installed on your machine
- Express.js framework
- Basic understanding of REST API concepts

### Steps to Install

1. Clone the repository:
   bash
   git clone https://github.com/your-username/Limited-Time-Deal.git
   
2. Navigate to the project directory:
   bash
   cd Limited-Time-Deal
   
3. Install dependencies:
   bash
   npm install
   

4. Run the app:
   bash
   npm start

   ### Environment Variables

Make sure to create a .env file to configure the port for the Express server.

Example .env file:

PORT=5000


## Running the Application

After installation, use the following command to start the API:

bash
npm run start


## Technologies Used

- *Node.js*: Backend JavaScript runtime
- *Express.js*: Web framework for building APIs
- *dotenv* : To fetch data from env file.
- *File System (fs)*: For handling JSON-based storage
- *JavaScript (ES6+)*: For backend development

## Example Usage

Here’s how to create a new deal using Postman or any API client:

1. Send a POST request to /api/deals/create with the following body:
   json
   {
     "price": 4500,
     "maxItems": 7,
     "endTime": 2024-15-07T09:52:07.770Z
   }
   

2. Claim a deal by sending a POST request to /api/deals/claim/:dealId with the deal ID in the URL.

## Error Handling

The API has proper error handling mechanisms for the following situations:
- Invalid Deal ID
- Expired deals
- Maximum item limit reached
- End Date error
- Price and Max Items are less than zero.

## Future Enhancements

- Integration with user authentication (JWT or OAuth)
- Persistent database (MongoDB or PostgreSQL)
- Logging system for debugging and auditing

## Contributing

Contributions are welcome! Feel free to submit a pull request or raise an issue for any bugs or feature suggestions.