module.exports = (sequelize, DataTypes) => {
    const PaymentMethod = sequelize.define('PaymentMethod', {
      payment_method_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      payment_method_name: { type: DataTypes.STRING, allowNull: false },
      created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    }, {
      tableName: 'PaymentMethods',
      timestamps: false,
    });
  
    PaymentMethod.associate = (models) => {
      PaymentMethod.belongsTo(models.User, { foreignKey: 'user_id' });
    };
  
    return PaymentMethod;
  };
  