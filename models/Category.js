module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      category_name: { type: DataTypes.STRING, allowNull: false },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    }, {
      tableName: 'Categories',
      timestamps: false,
    });
  
    Category.associate = (models) => {
      Category.belongsTo(models.User, { foreignKey: 'user_id' });
      Category.hasMany(models.Expense, { foreignKey: 'category_id' });
    };
  
    return Category;
  };
  