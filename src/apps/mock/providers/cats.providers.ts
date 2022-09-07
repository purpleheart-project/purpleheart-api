// import { Connection } from 'mongoose';
import { CatSchema } from './../schemas/cat.schema';

export const catsProviders = [
    {
        provide: 'MONGODB_CONNECTION_CatRepository',
        useFactory: (connection: any) =>
            connection.model(
                'cat_model',
                CatSchema,
                'cat',
            ),
        inject: ['MONGODB_CONNECTION'],
    },
];