'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    displayname: DataTypes.STRING
  }, {});
  Users.associate = function(models){
    Users.hasMany(
      models.messages,
      {as:"messages",foreignKey:"userId"}
      );
    Users.hasMany(
      models.Likes,
      {as:"likes",foreignKey:"userId"}
      );
  }
  return Users;
};