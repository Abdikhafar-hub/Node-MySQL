const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.js').development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./models/User.js')(sequelize, DataTypes);
db.Expense = require('./models/Expense.js')(sequelize, DataTypes);
db.Category = require('./models/Category.js')(sequelize, DataTypes);
db.PaymentMethod = require('./models/PaymentMethod.js')(sequelize, DataTypes);
db.Budget = require('./models/Budget.js')(sequelize, DataTypes);

// Define associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

module.exports = db;
