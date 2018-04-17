'use strict';
module.exports = (sequelize, DataTypes) => {
  var Castle = sequelize.define('Castle', {
    name: DataTypes.STRING,
    beach_id: DataTypes.INTEGER,
    tool_id: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: "castles"
  });
  Castle.associate = function(models) {
    Castle.belongsTo(models.Beach, {
      foreignKey: 'beach_id'
    });
  };
  return Castle;
};