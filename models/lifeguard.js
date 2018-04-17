'use strict';
module.exports = (sequelize, DataTypes) => {
  var Lifeguard = sequelize.define('Lifeguard', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    beach_id: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'lifeguards'
  });
  Lifeguard.associate = function(models) {
    Lifeguard.belongsTo(models.Beach, {
      foreignKey: 'beach_id'
    });
  };
  return Lifeguard;
};