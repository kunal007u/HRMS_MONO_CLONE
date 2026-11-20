import { DataTypes } from "sequelize";
import db from "../../config/database.js";

const Route = db.sequelize.define("routes", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parentRouteId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: "routes",
            key: "id",
        },
    },
    childRouteId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'routes',
            key: 'id',
        }
    }, 
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },

})

Route.hasMany(Route, { foreignKey: "parentRouteId", as: "childRoutes" });
Route.hasMany(Route, { foreignKey: "childRouteId", as: "subChildRoutes" });

export default Route;