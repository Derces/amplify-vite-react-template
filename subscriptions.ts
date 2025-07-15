/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateItem = /* GraphQL */ `subscription OnCreateItem(
  $filter: ModelSubscriptionItemFilterInput
  $tenantId: String
) {
  onCreateItem(filter: $filter, tenantId: $tenantId) {
    ItemCode
    ItemName
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onCreateLabelData = /* GraphQL */ `subscription OnCreateLabelData(
  $filter: ModelSubscriptionLabelDataFilterInput
  $tenantId: String
) {
  onCreateLabelData(filter: $filter, tenantId: $tenantId) {
    ColumnKey
    Id
    PrintOrderNo
    createdAt
    id
    printData
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateLabelDataSubscriptionVariables,
  APITypes.OnCreateLabelDataSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $tenantId: String
) {
  onCreateTodo(filter: $filter, tenantId: $tenantId) {
    content
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem(
  $filter: ModelSubscriptionItemFilterInput
  $tenantId: String
) {
  onDeleteItem(filter: $filter, tenantId: $tenantId) {
    ItemCode
    ItemName
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
export const onDeleteLabelData = /* GraphQL */ `subscription OnDeleteLabelData(
  $filter: ModelSubscriptionLabelDataFilterInput
  $tenantId: String
) {
  onDeleteLabelData(filter: $filter, tenantId: $tenantId) {
    ColumnKey
    Id
    PrintOrderNo
    createdAt
    id
    printData
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteLabelDataSubscriptionVariables,
  APITypes.OnDeleteLabelDataSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $tenantId: String
) {
  onDeleteTodo(filter: $filter, tenantId: $tenantId) {
    content
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem(
  $filter: ModelSubscriptionItemFilterInput
  $tenantId: String
) {
  onUpdateItem(filter: $filter, tenantId: $tenantId) {
    ItemCode
    ItemName
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onUpdateLabelData = /* GraphQL */ `subscription OnUpdateLabelData(
  $filter: ModelSubscriptionLabelDataFilterInput
  $tenantId: String
) {
  onUpdateLabelData(filter: $filter, tenantId: $tenantId) {
    ColumnKey
    Id
    PrintOrderNo
    createdAt
    id
    printData
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateLabelDataSubscriptionVariables,
  APITypes.OnUpdateLabelDataSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $tenantId: String
) {
  onUpdateTodo(filter: $filter, tenantId: $tenantId) {
    content
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
