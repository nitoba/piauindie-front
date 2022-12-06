import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: `${process.env.BASE_URL}/api/graphql`,
  documents: ['src/gql/*.graphql'],
  generates: {
    './src/gql/generated.ts': {
      plugins: [
        'typescript-operations',
        'typescript',
        'typescript-react-apollo',
      ],
    },
  },
  config: {
    reactApolloVersion: 3,
    withHooks: true,
    withHOC: false,
    withComponent: false,
  },
}

export default config
