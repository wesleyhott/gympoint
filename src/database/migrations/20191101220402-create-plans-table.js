module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('plans', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primarykey: true,
      },
      title: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true,
      },
      duration: {
        type: Sequelize.INTEGER,
        allownull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allownull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allownull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('plans');
  },
};
