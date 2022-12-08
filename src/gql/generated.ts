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
export type GetAllCoursesQueryVariables = Exact<{ [key: string]: never }>

export type GetAllCoursesQuery = {
  __typename?: 'Query'
  courses?: Array<{
    __typename?: 'Course'
    id: string
    title?: string | null
    description?: string | null
    slug?: string | null
    thumbnailUrl?: string | null
    courseEvaluation?: number | null
    price?: number | null
    lessonsCount?: number | null
    createdAt?: any | null
  }> | null
}

export type GetLessonsByCourseSlugQueryVariables = Exact<{
  slug: Scalars['String']
}>

export type GetLessonsByCourseSlugQuery = {
  __typename?: 'Query'
  lessons?: Array<{
    __typename?: 'Lesson'
    id: string
    title?: string | null
    description?: string | null
    slug?: string | null
    videoUrl?: string | null
    course?: {
      __typename?: 'Course'
      teacher?: { __typename?: 'User'; id: string; name?: string | null } | null
    } | null
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

export type Course = {
  __typename?: 'Course'
  courseEvaluation?: Maybe<Scalars['Int']>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  durationInMinutes?: Maybe<Scalars['Int']>
  enrolledOn?: Maybe<Array<Enrollment>>
  enrolledOnCount?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  lessons?: Maybe<Array<Lesson>>
  lessonsCount?: Maybe<Scalars['Int']>
  price?: Maybe<Scalars['Float']>
  slug?: Maybe<Scalars['String']>
  teacher?: Maybe<User>
  thumbnailUrl?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CourseEnrolledOnArgs = {
  orderBy?: Array<EnrollmentOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: EnrollmentWhereInput
}

export type CourseEnrolledOnCountArgs = {
  where?: EnrollmentWhereInput
}

export type CourseLessonsArgs = {
  orderBy?: Array<LessonOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: LessonWhereInput
}

export type CourseLessonsCountArgs = {
  where?: LessonWhereInput
}

export type CourseCreateInput = {
  courseEvaluation?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  durationInMinutes?: InputMaybe<Scalars['Int']>
  enrolledOn?: InputMaybe<EnrollmentRelateToManyForCreateInput>
  lessons?: InputMaybe<LessonRelateToManyForCreateInput>
  price?: InputMaybe<Scalars['Float']>
  slug?: InputMaybe<Scalars['String']>
  teacher?: InputMaybe<UserRelateToOneForCreateInput>
  thumbnailUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CourseManyRelationFilter = {
  every?: InputMaybe<CourseWhereInput>
  none?: InputMaybe<CourseWhereInput>
  some?: InputMaybe<CourseWhereInput>
}

export type CourseOrderByInput = {
  courseEvaluation?: InputMaybe<OrderDirection>
  createdAt?: InputMaybe<OrderDirection>
  description?: InputMaybe<OrderDirection>
  durationInMinutes?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  price?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  thumbnailUrl?: InputMaybe<OrderDirection>
  title?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type CourseRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>
  create?: InputMaybe<Array<CourseCreateInput>>
}

export type CourseRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<CourseWhereUniqueInput>>
  create?: InputMaybe<Array<CourseCreateInput>>
  disconnect?: InputMaybe<Array<CourseWhereUniqueInput>>
  set?: InputMaybe<Array<CourseWhereUniqueInput>>
}

export type CourseRelateToOneForCreateInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>
  create?: InputMaybe<CourseCreateInput>
}

export type CourseRelateToOneForUpdateInput = {
  connect?: InputMaybe<CourseWhereUniqueInput>
  create?: InputMaybe<CourseCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']>
}

export type CourseUpdateArgs = {
  data: CourseUpdateInput
  where: CourseWhereUniqueInput
}

export type CourseUpdateInput = {
  courseEvaluation?: InputMaybe<Scalars['Int']>
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  durationInMinutes?: InputMaybe<Scalars['Int']>
  enrolledOn?: InputMaybe<EnrollmentRelateToManyForUpdateInput>
  lessons?: InputMaybe<LessonRelateToManyForUpdateInput>
  price?: InputMaybe<Scalars['Float']>
  slug?: InputMaybe<Scalars['String']>
  teacher?: InputMaybe<UserRelateToOneForUpdateInput>
  thumbnailUrl?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>
  NOT?: InputMaybe<Array<CourseWhereInput>>
  OR?: InputMaybe<Array<CourseWhereInput>>
  courseEvaluation?: InputMaybe<IntNullableFilter>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  description?: InputMaybe<StringFilter>
  durationInMinutes?: InputMaybe<IntFilter>
  enrolledOn?: InputMaybe<EnrollmentManyRelationFilter>
  id?: InputMaybe<IdFilter>
  lessons?: InputMaybe<LessonManyRelationFilter>
  price?: InputMaybe<FloatNullableFilter>
  slug?: InputMaybe<StringFilter>
  teacher?: InputMaybe<UserWhereInput>
  thumbnailUrl?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
}

export type CourseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  slug?: InputMaybe<Scalars['String']>
}

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

export type Enrollment = {
  __typename?: 'Enrollment'
  course?: Maybe<Course>
  createdAt?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  student?: Maybe<User>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type EnrollmentCreateInput = {
  course?: InputMaybe<CourseRelateToOneForCreateInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  student?: InputMaybe<UserRelateToOneForCreateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EnrollmentManyRelationFilter = {
  every?: InputMaybe<EnrollmentWhereInput>
  none?: InputMaybe<EnrollmentWhereInput>
  some?: InputMaybe<EnrollmentWhereInput>
}

export type EnrollmentOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
}

export type EnrollmentRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<EnrollmentWhereUniqueInput>>
  create?: InputMaybe<Array<EnrollmentCreateInput>>
}

export type EnrollmentRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<EnrollmentWhereUniqueInput>>
  create?: InputMaybe<Array<EnrollmentCreateInput>>
  disconnect?: InputMaybe<Array<EnrollmentWhereUniqueInput>>
  set?: InputMaybe<Array<EnrollmentWhereUniqueInput>>
}

export type EnrollmentUpdateArgs = {
  data: EnrollmentUpdateInput
  where: EnrollmentWhereUniqueInput
}

export type EnrollmentUpdateInput = {
  course?: InputMaybe<CourseRelateToOneForUpdateInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  student?: InputMaybe<UserRelateToOneForUpdateInput>
  updatedAt?: InputMaybe<Scalars['DateTime']>
}

export type EnrollmentWhereInput = {
  AND?: InputMaybe<Array<EnrollmentWhereInput>>
  NOT?: InputMaybe<Array<EnrollmentWhereInput>>
  OR?: InputMaybe<Array<EnrollmentWhereInput>>
  course?: InputMaybe<CourseWhereInput>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  id?: InputMaybe<IdFilter>
  student?: InputMaybe<UserWhereInput>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
}

export type EnrollmentWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
}

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<Scalars['Float']>>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  not?: InputMaybe<FloatNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Float']>>
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

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
}

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<Scalars['Int']>>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  not?: InputMaybe<IntNullableFilter>
  notIn?: InputMaybe<Array<Scalars['Int']>>
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

export type Lesson = {
  __typename?: 'Lesson'
  course?: Maybe<Course>
  createdAt?: Maybe<Scalars['DateTime']>
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  slug?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  videoUrl?: Maybe<Scalars['String']>
}

export type LessonCreateInput = {
  course?: InputMaybe<CourseRelateToOneForCreateInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  videoUrl?: InputMaybe<Scalars['String']>
}

export type LessonManyRelationFilter = {
  every?: InputMaybe<LessonWhereInput>
  none?: InputMaybe<LessonWhereInput>
  some?: InputMaybe<LessonWhereInput>
}

export type LessonOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  description?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  slug?: InputMaybe<OrderDirection>
  title?: InputMaybe<OrderDirection>
  updatedAt?: InputMaybe<OrderDirection>
  videoUrl?: InputMaybe<OrderDirection>
}

export type LessonRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>
  create?: InputMaybe<Array<LessonCreateInput>>
}

export type LessonRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<LessonWhereUniqueInput>>
  create?: InputMaybe<Array<LessonCreateInput>>
  disconnect?: InputMaybe<Array<LessonWhereUniqueInput>>
  set?: InputMaybe<Array<LessonWhereUniqueInput>>
}

export type LessonUpdateArgs = {
  data: LessonUpdateInput
  where: LessonWhereUniqueInput
}

export type LessonUpdateInput = {
  course?: InputMaybe<CourseRelateToOneForUpdateInput>
  createdAt?: InputMaybe<Scalars['DateTime']>
  description?: InputMaybe<Scalars['String']>
  slug?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
  updatedAt?: InputMaybe<Scalars['DateTime']>
  videoUrl?: InputMaybe<Scalars['String']>
}

export type LessonWhereInput = {
  AND?: InputMaybe<Array<LessonWhereInput>>
  NOT?: InputMaybe<Array<LessonWhereInput>>
  OR?: InputMaybe<Array<LessonWhereInput>>
  course?: InputMaybe<CourseWhereInput>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IdFilter>
  slug?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeNullableFilter>
  videoUrl?: InputMaybe<StringFilter>
}

export type LessonWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  slug?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>
  createCourse?: Maybe<Course>
  createCourses?: Maybe<Array<Maybe<Course>>>
  createEnrollment?: Maybe<Enrollment>
  createEnrollments?: Maybe<Array<Maybe<Enrollment>>>
  createInitialUser: UserAuthenticationWithPasswordSuccess
  createLesson?: Maybe<Lesson>
  createLessons?: Maybe<Array<Maybe<Lesson>>>
  createUser?: Maybe<User>
  createUsers?: Maybe<Array<Maybe<User>>>
  deleteCourse?: Maybe<Course>
  deleteCourses?: Maybe<Array<Maybe<Course>>>
  deleteEnrollment?: Maybe<Enrollment>
  deleteEnrollments?: Maybe<Array<Maybe<Enrollment>>>
  deleteLesson?: Maybe<Lesson>
  deleteLessons?: Maybe<Array<Maybe<Lesson>>>
  deleteUser?: Maybe<User>
  deleteUsers?: Maybe<Array<Maybe<User>>>
  endSession: Scalars['Boolean']
  updateCourse?: Maybe<Course>
  updateCourses?: Maybe<Array<Maybe<Course>>>
  updateEnrollment?: Maybe<Enrollment>
  updateEnrollments?: Maybe<Array<Maybe<Enrollment>>>
  updateLesson?: Maybe<Lesson>
  updateLessons?: Maybe<Array<Maybe<Lesson>>>
  updateUser?: Maybe<User>
  updateUsers?: Maybe<Array<Maybe<User>>>
}

export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationCreateCourseArgs = {
  data: CourseCreateInput
}

export type MutationCreateCoursesArgs = {
  data: Array<CourseCreateInput>
}

export type MutationCreateEnrollmentArgs = {
  data: EnrollmentCreateInput
}

export type MutationCreateEnrollmentsArgs = {
  data: Array<EnrollmentCreateInput>
}

export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput
}

export type MutationCreateLessonArgs = {
  data: LessonCreateInput
}

export type MutationCreateLessonsArgs = {
  data: Array<LessonCreateInput>
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>
}

export type MutationDeleteCourseArgs = {
  where: CourseWhereUniqueInput
}

export type MutationDeleteCoursesArgs = {
  where: Array<CourseWhereUniqueInput>
}

export type MutationDeleteEnrollmentArgs = {
  where: EnrollmentWhereUniqueInput
}

export type MutationDeleteEnrollmentsArgs = {
  where: Array<EnrollmentWhereUniqueInput>
}

export type MutationDeleteLessonArgs = {
  where: LessonWhereUniqueInput
}

export type MutationDeleteLessonsArgs = {
  where: Array<LessonWhereUniqueInput>
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>
}

export type MutationUpdateCourseArgs = {
  data: CourseUpdateInput
  where: CourseWhereUniqueInput
}

export type MutationUpdateCoursesArgs = {
  data: Array<CourseUpdateArgs>
}

export type MutationUpdateEnrollmentArgs = {
  data: EnrollmentUpdateInput
  where: EnrollmentWhereUniqueInput
}

export type MutationUpdateEnrollmentsArgs = {
  data: Array<EnrollmentUpdateArgs>
}

export type MutationUpdateLessonArgs = {
  data: LessonUpdateInput
  where: LessonWhereUniqueInput
}

export type MutationUpdateLessonsArgs = {
  data: Array<LessonUpdateArgs>
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
  course?: Maybe<Course>
  courses?: Maybe<Array<Course>>
  coursesCount?: Maybe<Scalars['Int']>
  enrollment?: Maybe<Enrollment>
  enrollments?: Maybe<Array<Enrollment>>
  enrollmentsCount?: Maybe<Scalars['Int']>
  keystone: KeystoneMeta
  lesson?: Maybe<Lesson>
  lessons?: Maybe<Array<Lesson>>
  lessonsCount?: Maybe<Scalars['Int']>
  user?: Maybe<User>
  users?: Maybe<Array<User>>
  usersCount?: Maybe<Scalars['Int']>
}

export type QueryCourseArgs = {
  where: CourseWhereUniqueInput
}

export type QueryCoursesArgs = {
  orderBy?: Array<CourseOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: CourseWhereInput
}

export type QueryCoursesCountArgs = {
  where?: CourseWhereInput
}

export type QueryEnrollmentArgs = {
  where: EnrollmentWhereUniqueInput
}

export type QueryEnrollmentsArgs = {
  orderBy?: Array<EnrollmentOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: EnrollmentWhereInput
}

export type QueryEnrollmentsCountArgs = {
  where?: EnrollmentWhereInput
}

export type QueryLessonArgs = {
  where: LessonWhereUniqueInput
}

export type QueryLessonsArgs = {
  orderBy?: Array<LessonOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: LessonWhereInput
}

export type QueryLessonsCountArgs = {
  where?: LessonWhereInput
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
  enrollments?: Maybe<Array<Enrollment>>
  enrollmentsCount?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  password?: Maybe<PasswordState>
  role?: Maybe<UserRoleType>
  teachingIn?: Maybe<Array<Course>>
  teachingInCount?: Maybe<Scalars['Int']>
}

export type UserEnrollmentsArgs = {
  orderBy?: Array<EnrollmentOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: EnrollmentWhereInput
}

export type UserEnrollmentsCountArgs = {
  where?: EnrollmentWhereInput
}

export type UserTeachingInArgs = {
  orderBy?: Array<CourseOrderByInput>
  skip?: Scalars['Int']
  take?: InputMaybe<Scalars['Int']>
  where?: CourseWhereInput
}

export type UserTeachingInCountArgs = {
  where?: CourseWhereInput
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
  enrollments?: InputMaybe<EnrollmentRelateToManyForCreateInput>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<UserRoleType>
  teachingIn?: InputMaybe<CourseRelateToManyForCreateInput>
}

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>
  email?: InputMaybe<OrderDirection>
  id?: InputMaybe<OrderDirection>
  name?: InputMaybe<OrderDirection>
  role?: InputMaybe<OrderDirection>
}

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  create?: InputMaybe<UserCreateInput>
}

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>
  create?: InputMaybe<UserCreateInput>
  disconnect?: InputMaybe<Scalars['Boolean']>
}

export enum UserRoleType {
  Admin = 'admin',
  Student = 'student',
  Teacher = 'teacher',
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
  enrollments?: InputMaybe<EnrollmentRelateToManyForUpdateInput>
  name?: InputMaybe<Scalars['String']>
  password?: InputMaybe<Scalars['String']>
  role?: InputMaybe<UserRoleType>
  teachingIn?: InputMaybe<CourseRelateToManyForUpdateInput>
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeNullableFilter>
  email?: InputMaybe<StringFilter>
  enrollments?: InputMaybe<EnrollmentManyRelationFilter>
  id?: InputMaybe<IdFilter>
  name?: InputMaybe<StringFilter>
  role?: InputMaybe<UserRoleTypeNullableFilter>
  teachingIn?: InputMaybe<CourseManyRelationFilter>
}

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

export const GetAllCoursesDocument = gql`
    query getAllCourses {
  courses {
    id
    title
    description
    slug
    thumbnailUrl
    courseEvaluation
    price
    lessonsCount
    createdAt
  }
}
    `

/**
 * __useGetAllCoursesQuery__
 *
 * To run a query within a React component, call `useGetAllCoursesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCoursesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCoursesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCoursesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllCoursesQuery,
    GetAllCoursesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(
    GetAllCoursesDocument,
    options,
  )
}
export function useGetAllCoursesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllCoursesQuery,
    GetAllCoursesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllCoursesQuery, GetAllCoursesQueryVariables>(
    GetAllCoursesDocument,
    options,
  )
}
export type GetAllCoursesQueryHookResult = ReturnType<
  typeof useGetAllCoursesQuery
>
export type GetAllCoursesLazyQueryHookResult = ReturnType<
  typeof useGetAllCoursesLazyQuery
>
export type GetAllCoursesQueryResult = Apollo.QueryResult<
  GetAllCoursesQuery,
  GetAllCoursesQueryVariables
>
export const GetLessonsByCourseSlugDocument = gql`
    query getLessonsByCourseSlug($slug: String!) {
  lessons(where: {course: {slug: {equals: $slug}}}, orderBy: {createdAt: desc}) {
    id
    title
    description
    slug
    videoUrl
    course {
      teacher {
        id
        name
      }
    }
  }
}
    `

/**
 * __useGetLessonsByCourseSlugQuery__
 *
 * To run a query within a React component, call `useGetLessonsByCourseSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsByCourseSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsByCourseSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetLessonsByCourseSlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetLessonsByCourseSlugQuery,
    GetLessonsByCourseSlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetLessonsByCourseSlugQuery,
    GetLessonsByCourseSlugQueryVariables
  >(GetLessonsByCourseSlugDocument, options)
}
export function useGetLessonsByCourseSlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLessonsByCourseSlugQuery,
    GetLessonsByCourseSlugQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetLessonsByCourseSlugQuery,
    GetLessonsByCourseSlugQueryVariables
  >(GetLessonsByCourseSlugDocument, options)
}
export type GetLessonsByCourseSlugQueryHookResult = ReturnType<
  typeof useGetLessonsByCourseSlugQuery
>
export type GetLessonsByCourseSlugLazyQueryHookResult = ReturnType<
  typeof useGetLessonsByCourseSlugLazyQuery
>
export type GetLessonsByCourseSlugQueryResult = Apollo.QueryResult<
  GetLessonsByCourseSlugQuery,
  GetLessonsByCourseSlugQueryVariables
>
