/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem(
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
`;
export const onCreateLabelData = /* GraphQL */ `
  subscription OnCreateLabelData(
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
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo(
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
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem(
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
`;
export const onDeleteLabelData = /* GraphQL */ `
  subscription OnDeleteLabelData(
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
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo(
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
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem(
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
`;
export const onUpdateLabelData = /* GraphQL */ `
  subscription OnUpdateLabelData(
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
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo(
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
`;
