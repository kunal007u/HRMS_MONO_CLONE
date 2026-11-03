import express from "express"; // Import the express library to create an Express application
import cors from "cors";// Import the cors library to enable Cross-Origin Resource Sharing (CORS) for the application
import { config } from "dotenv"; // Import the config function from the dotenv library to configure environment variables
import db from "./config/database.js";

config(); // Load environment variables from the .env file

const PORT = process.env.PORT || 9000; 

const app = express(); // Create an instance of the Express application

app.use(cors({ origin: "http://localhost:5173" })); // Enable CORS for requests coming from http://localhost:5173
app.use(express.json()); // Middleware to parse incoming JSON requests

import routes from "./src/routes/index.js"; // Import the routes defined in the index.ts file
app.use(routes); // Use the imported routes

app.listen(PORT, async () => {
    try{
        await db.sequelize.authenticate(); // Test the database connection
        console.log("Database connected successfully");
    }catch(error){
        console.error("Unable to connect to the database:", error);
    }
    console.log(`Server is running on port ${PORT}`);
});