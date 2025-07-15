/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
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
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const getLabelData = /* GraphQL */ `query GetLabelData($id: ID!) {
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
` as GeneratedQuery<
  APITypes.GetLabelDataQueryVariables,
  APITypes.GetLabelDataQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
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
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listItems = /* GraphQL */ `query ListItems(
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
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
export const listLabelData = /* GraphQL */ `query ListLabelData(
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
` as GeneratedQuery<
  APITypes.ListLabelDataQueryVariables,
  APITypes.ListLabelDataQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
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
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
