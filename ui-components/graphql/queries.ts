/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
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
export const getLabelData = /* GraphQL */ `
  query GetLabelData($id: ID!) {
    getLabelData(id: $id) {
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
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ItemCode
        ItemName
        createdAt
        id
        tenantId
        tenant_id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listLabelData = /* GraphQL */ `
  query ListLabelData(
    $filter: ModelLabelDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLabelData(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        content
        createdAt
        id
        tenantId
        tenant_id
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
