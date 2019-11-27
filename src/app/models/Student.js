import Sequelize, { Model } from 'sequelize';

// import bcrypt from 'bcryptjs';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        //       password: Sequelize.VIRTUAL, // tipo que nunca vi existir na base
        //     password_hash: Sequelize.STRING,
        school: Sequelize.STRING,
        score: Sequelize.INTEGER,
        age: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;

    //   this.addHook('beforeSave', async user => {
    // o beforesave executa o esse comando antes de salvar no banco de dados
    //   if (user.password) {
    //   user.password_hash = await bcrypt.hash(user.password, 8);
    // }
    // });
    // return this;
    // }

    // static associate(models) {
    //   this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    // }

    // checkPassword(password) {
    // return bcrypt.compare(password, this.password_hash);
  }
}

export default Student;
