import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        // somente aqui campos de interação do usuário tais como create, edit
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER.UNSIGNED,
        weight: Sequelize.DECIMAL(10, 2),
        height: Sequelize.DECIMAL(10, 2),
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Student;
