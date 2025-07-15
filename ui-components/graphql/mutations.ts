/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
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
`;
export const createLabelData = /* GraphQL */ `
  mutation CreateLabelData(
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
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
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
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
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
`;
export const deleteLabelData = /* GraphQL */ `
  mutation DeleteLabelData(
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
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
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
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
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
`;
export const updateLabelData = /* GraphQL */ `
  mutation UpdateLabelData(
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
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
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
`;
