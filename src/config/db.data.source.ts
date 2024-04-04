import { join } from "path";
import { DataSource, DataSourceOptions } from "typeorm";
import { config } from 'dotenv';

config();

const {
    DB_DIALECT,
    DB_HOST,
    DB_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
} = process.env;

export const dataSourceOptions: DataSourceOptions = {
    type: DB_DIALECT as any,
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: false,
    entities: [
        'dist/**/entities/*.{js,ts}'
    ],
    migrations: [
        join(__dirname, '..', 'database', 'migrations', '*.{ts,js}')
    ],
    logging: true
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;