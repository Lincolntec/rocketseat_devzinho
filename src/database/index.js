import Sequelize from 'sequelize';
// import mongoose from 'mongoose';
import Company from '../app/models/Company';
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

const models = [Student, Company];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
    //  .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
