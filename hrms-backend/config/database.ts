interface DB {
    sequelize: Sequelize;
    Sequelize: typeof Sequelize;
}

import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from the .env file

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error("DATABASE_URL is missing");
}

const sequelize = new Sequelize(databaseUrl, {
    dialect: "postgres", // Specify the database dialect as PostgreSQL
    logging: false, // Disable logging of SQL queries to the console
    retry: {
        match: [/Deadlock/i],
        max: 3,
        backoffBase: 1000,
        backoffExponent: 1.5,
    },

});

const db:DB = {
    sequelize,
    Sequelize,
} 

export default db; // Export the db object for use in other parts of the application