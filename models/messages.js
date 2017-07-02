'use strict';
module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define('messages', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  messages.associate = function(models){
    messages.belongsTo(
      models.Users,
      {as:"user",foreignKey:"userId"}
      );
    messages.hasMany(
      models.Likes,
      {as:"likes",foreignKey:"messageId"}
      );
  }
  return messages;
};