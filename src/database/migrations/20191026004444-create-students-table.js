module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('students', {
      id: {
        type: Sequelize.INTEGER,
        allownull: false,
        autoIncrement: true,
        primarykey: true,
      },
      name: {
        type: Sequelize.STRING,
        allownull: false,
      },
      email: {
        type: Sequelize.STRING,
        allownull: false,
        unique: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allownull: false,
        unique: true,
      },
      weight: {
        type: Sequelize.DECIMAL(10, 2),
        allownull: false,
        unique: true,
      },
      height: {
        type: Sequelize.DECIMAL(10, 2),
        allownull: false,
        unique: true,
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
    return queryInterface.dropTable('users');
  },
};
