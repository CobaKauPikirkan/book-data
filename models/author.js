'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.author, {
        foreignKey:"id"
      })
    }
  }
  author.init({
    id :{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};