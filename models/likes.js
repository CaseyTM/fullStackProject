'use strict';
module.exports = function(sequelize, DataTypes) {
  var Likes = sequelize.define('Likes', {
    userId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER
  }, {});
  Likes.associate = function(models){
    Likes.belongsTo(
      models.Users,
      {as:"user",foreignKey:"userId"}
      );
    Likes.belongsTo(
      models.messages,
      {as:"message",foreignKey:"messageId"}
      );
  }
  return Likes;
};