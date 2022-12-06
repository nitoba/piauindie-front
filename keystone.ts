import 'dotenv/config'
import { config } from '@keystone-6/core'
import { withAuth, session } from './src/keystone/auth'
import { dbConfig } from './src/keystone/db-config'
import { schemas } from './src/keystone/schemas'

export default withAuth(
  config({
    db: dbConfig,
    lists: schemas,
    session,
    server: {
      options: {
        path: '/admin',
      },
    },
  }),
)
