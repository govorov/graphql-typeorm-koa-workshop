import { createConnection } from 'typeorm';
import { Card } from 'entities/card';


export const databaseInitializer = async () => {

    return await createConnection({
        type     : 'postgres',
        host     : '0.0.0.0',
        port     : 5432,
        username : 'finch',
        password : 'finch',
        database : 'finch_development',
        entities: [
            Card,
        ],
        logging: ['query', 'error'],
        synchronize: true,
    }).then((connection) => {
        console.log('Database connection established');
    });

};
