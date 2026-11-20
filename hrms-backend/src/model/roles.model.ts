import { DataTypes } from "sequelize";
import db from "../../config/database.js"

export type RoleAttributes = {
    id: string;
    name: string;
    isActive: boolean;
}

const Role = db.sequelize.define("roles", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
},{
    timestamps: true,
    paranoid: true,
})

export default Role;