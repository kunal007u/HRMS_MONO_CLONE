import { DataTypes } from "sequelize";
import db from "../../config/database.js";
import Role from "./roles.model.js";
import Route from "./route.model.js";

const Permissions = db.sequelize.define("permissions", {
    id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    canCreate:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    canRead:{
        type: DataTypes.BOOLEAN,
        allowNull: false,   
        defaultValue: false,
    },
    canUpdate:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    canDelete:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    roleId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "roles",
            key: "id",
        },
    },
    routeId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: "routes",
            key: "id",      
        }
    },
})

Permissions.belongsTo(Role, {foreignKey: "roleId"});
Permissions.belongsTo(Route, {foreignKey: "routeId"});
export default Permissions;
