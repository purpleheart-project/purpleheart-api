import { Connection } from 'typeorm'
import { User } from '../entities/user.entity'

export const userProviders = [
  {
    provide: 'user_EntityRepository',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
]