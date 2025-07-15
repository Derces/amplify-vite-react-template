/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createItem = /* GraphQL */ `mutation CreateItem(
  $condition: ModelItemConditionInput
  $input: CreateItemInput!
) {
  createItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const createLabelData = /* GraphQL */ `mutation CreateLabelData(
  $condition: ModelLabelDataConditionInput
  $input: CreateLabelDataInput!
) {
  createLabelData(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateLabelDataMutationVariables,
  APITypes.CreateLabelDataMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $condition: ModelItemConditionInput
  $input: DeleteItemInput!
) {
  deleteItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
export const deleteLabelData = /* GraphQL */ `mutation DeleteLabelData(
  $condition: ModelLabelDataConditionInput
  $input: DeleteLabelDataInput!
) {
  deleteLabelData(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteLabelDataMutationVariables,
  APITypes.DeleteLabelDataMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $condition: ModelItemConditionInput
  $input: UpdateItemInput!
) {
  updateItem(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const updateLabelData = /* GraphQL */ `mutation UpdateLabelData(
  $condition: ModelLabelDataConditionInput
  $input: UpdateLabelDataInput!
) {
  updateLabelData(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateLabelDataMutationVariables,
  APITypes.UpdateLabelDataMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    tenantId
    tenant_id
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
