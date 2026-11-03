import { DataTypes } from "sequelize";
import db from "../../config/database.js"
import bcrypt from "bcrypt";

const Employees = db.sequelize.define("employees", {
    id:{
        type: DataTypes.UUID, // Use UUID data type for the primary key
        defaultValue: DataTypes.UUIDV4, // Automatically generate a UUID if not provided
        allowNull: false, // Ensure that the primary key cannot be null
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "The first name of the employee",
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: "The last name of the employee",
    },
    middleName: {
        type: DataTypes.STRING, 
        allowNull: true,
        comment: "The middle name of the employee",
    },

    pancardNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    aadharNo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    uanNo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    workLocation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pfNo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    gender: {
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
    },
    profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    currentAddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    permanentAddress: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        comment:  "The email address of the employee",
    },
    dateOfJoining: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        set(value) {
            // Hash the password before storing it in the database
            const salt = bcrypt.genSaltSync(12); // Generate a salt with 12 rounds
            const hashedPassword = bcrypt.hashSync(String(value), salt);
            this.setDataValue("password", hashedPassword);
        }

    },
    employee_code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    sessionId: {
        type: DataTypes.UUID,
        allowNull: true,
    },
   
})

export default Employees as any