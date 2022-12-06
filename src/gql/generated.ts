import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
export type GetUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    name?: string | null
    email?: string | null
  }> | null
}

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
  JSON: any
}

export type AuthenticatedItem = User

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
}

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>
  gt?: InputMaybe<Scalars['DateTime']>
  gte?: InputMaybe<Scalars['DateTime']>
  in?: InputMaybe<Array<Scalars['DateTime']>>
  lt?: InputMaybe<Scalars['DateTime']>
  lte?: InputMaybe<Scalars['DateTime']>
  not?: InputMaybe<DateTimeNullableFilter>
  notIn?: InputMaybe<Array<Scalars['DateTime']>>
}

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>
  gt?: InputMaybe<Scalars['ID']>
  gte?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<Scalars['ID']>>
  lt?: InputMaybe<Scalars['ID']>
  lte?: InputMaybe<Scalars['ID']>
  not?: InputMaybe<IdFilter>
  notIn?: InputMaybe<Array<Scalars['ID']>>
}

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta'
  list?: Maybe<KeystoneAdminUiListMeta>
  lists: Array<KeystoneAdminUiListMeta>
}

export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']
}

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta'
  description?: Maybe<Scalars['String']>
  fields: Array<KeystoneAdminUiFieldMeta>
  label: Scalars['String']
}

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta'
  createView: KeystoneAdminUiFieldMetaCreateView
  customViewsIndex?: Maybe<Scalars['Int']>
  description?: Maybe<Scalars['String']>
  fieldMeta?: Maybe<Scalars['JSON']>
  isFilterable: Scalars['Boolean']
  isOrderable: Scalars['Boolean']
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>
  label: Scalars['String']
  listView: KeystoneAdminUiFieldMetaListView
  path: Scalars['String']
  search?: Maybe<QueryMode>
  viewsIndex: Scalars['Int']
}

export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>
}

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView'
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode
}

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView'
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>
}

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read',
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar',
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView'
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode
}

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read',
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta'
  description?: Maybe<Scalars['String']>
  fields: Array<KeystoneAdminUiFieldMeta>
  groups: Array<KeystoneAdminUiFieldGroupMeta>
  hideCreate: Scalars['Boolean']
  hideDelete: Scalars['Boolean']
  initialColumns: Array<Scalars['String']>
  initialSort?: Maybe<KeystoneAdminUiSort>
  isHidden: Scalars['Boolean']
  isSingleton: Scalars['Boolean']
  itemQueryName: Scalars['String']
  key: Scalars['String']
  label: Scalars['String']
  labelField: Scalars['String']
  listQueryName: Scalars['String']
  pageSize: Scalars['Int']
  path: Scalars['String']
  plural: Scalars['String']
  singular: Scalars['String']
}

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort'
  direction: KeystoneAdminUiSortDirection
  field: Scalars['String']
}

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta'
  adminMeta: KeystoneAdminMeta
}

export type Mutation = {
  __typename?: 'Mutation'
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>
  createInitialUser: UserAuthenticationWithPasswordSuccess
  createUser?: Maybe<User>
  createUsers?: Maybe<Array<Maybe<User>>>
  deleteUser?: Maybe<User>
  deleteUsers?: Maybe<Array<Maybe<User>>>
  endSession: Scalars['Boolean']
  updateUser?: Maybe<User>
  updateUsers?: Maybe<Array<Maybe<User>>>
}

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>
}

export type MutationUpdateUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>
}

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type PasswordState = {
  __typename?: 'PasswordState'
  isSet: Scalars['Boolean']
}

export type Query = {
  __typename?: 'Query'
  authenticatedItem?: Maybe<AuthenticatedItem>
  keystone: KeystoneMeta
  user?: Maybe<User>
  users?: Maybe<Array<User>>
  usersCount?: Maybe<Scalars['Int']>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: UserWhereInput
}

export type QueryUsersCountArgs = {
  where?: UserWhereInput
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>
  endsWith?: InputMaybe<Scalars['String']>
  equals?: InputMaybe<Scalars['String']>
  gt?: InputMaybe<Scalars['String']>
  gte?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  lt?: InputMaybe<Scalars['String']>
  lte?: InputMaybe<Scalars['String']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<NestedStringFilter>
  notIn?: InputMaybe<Array<Scalars['String']>>
  startsWith?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  password?: Maybe<PasswordState>
  role?: Maybe<UserRoleType>
}

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure'
  message: Scalars['String']
}

export type UserAuthenticationWithPasswordResult =
  | UserAuthenticationWithPasswordFailure
  | UserAuthenticationWithPasswordSuccess

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess'
  item: User
  sessionToken: Scalars['String']
}

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<UserRoleType>
}

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  email?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  role?: InputMaybe<OrderDirection>
}

export enum UserRoleType {
  Admin = 'admin',
  Student = 'student',
}

export type UserRoleTypeNullableFilter = {
  equals?: InputMaybe<UserRoleType>
  in?: InputMaybe<Array<UserRoleType>>
  not?: InputMaybe<UserRoleTypeNullableFilter>
  notIn?: InputMaybe<Array<UserRoleType>>
}

export type UserUpdateArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<UserRoleType>
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  email?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<UserRoleTypeNullableFilter>
}

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

export const GetUsersDocument = gql`
    query getUsers {
  users {
    name
    email
  }
}
    `

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  )
}
export function useGetUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUsersQuery,
    GetUsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(
    GetUsersDocument,
    options,
  )
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>
export type GetUsersLazyQueryHookResult = ReturnType<
  typeof useGetUsersLazyQuery
>
export type GetUsersQueryResult = Apollo.QueryResult<
  GetUsersQuery,
  GetUsersQueryVariables
>
