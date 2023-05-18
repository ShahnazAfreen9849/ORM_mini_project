const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true
        },
        traveller_amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        traveller_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'travller',
                key: 'id',
                unique: false
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
    }
);

module.exports = Trip;
