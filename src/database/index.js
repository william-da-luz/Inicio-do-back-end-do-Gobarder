import sequelize from "sequelize";

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }

}

export default new database();