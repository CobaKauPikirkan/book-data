'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.book, {
        foreignKey:"author_id"
      })
    }
  }
  book.init({
    id :{
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    isbn: DataTypes.STRING,
    title: DataTypes.STRING,
    realese: DataTypes.DATE,
    author_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};