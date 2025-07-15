/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Item = {
  __typename: "Item",
  ItemCode?: string | null,
  ItemName?: string | null,
  createdAt: string,
  id: string,
  tenantId?: string | null,
  tenant_id?: string | null,
  updatedAt: string,
};

export type LabelData = {
  __typename: "LabelData",
  ColumnKey?: string | null,
  Id?: string | null,
  PrintOrderNo?: string | null,
  createdAt: string,
  id: string,
  printData?: string | null,
  tenantId?: string | null,
  tenant_id?: string | null,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  tenantId?: string | null,
  tenant_id?: string | null,
  updatedAt: string,
};

export type ModelItemFilterInput = {
  ItemCode?: ModelStringInput | null,
  ItemName?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelItemFilterInput | null,
  or?: Array< ModelItemFilterInput | null > | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type ModelLabelDataFilterInput = {
  ColumnKey?: ModelStringInput | null,
  Id?: ModelStringInput | null,
  PrintOrderNo?: ModelStringInput | null,
  and?: Array< ModelLabelDataFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelLabelDataFilterInput | null,
  or?: Array< ModelLabelDataFilterInput | null > | null,
  printData?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelLabelDataConnection = {
  __typename: "ModelLabelDataConnection",
  items:  Array<LabelData | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelItemConditionInput = {
  ItemCode?: ModelStringInput | null,
  ItemName?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelItemConditionInput | null,
  or?: Array< ModelItemConditionInput | null > | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateItemInput = {
  ItemCode?: string | null,
  ItemName?: string | null,
  id?: string | null,
  tenant_id?: string | null,
};

export type ModelLabelDataConditionInput = {
  ColumnKey?: ModelStringInput | null,
  Id?: ModelStringInput | null,
  PrintOrderNo?: ModelStringInput | null,
  and?: Array< ModelLabelDataConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelLabelDataConditionInput | null,
  or?: Array< ModelLabelDataConditionInput | null > | null,
  printData?: ModelStringInput | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateLabelDataInput = {
  ColumnKey?: string | null,
  Id?: string | null,
  PrintOrderNo?: string | null,
  id?: string | null,
  printData?: string | null,
  tenant_id?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
  tenant_id?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type DeleteLabelDataInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdateItemInput = {
  ItemCode?: string | null,
  ItemName?: string | null,
  id: string,
  tenant_id?: string | null,
};

export type UpdateLabelDataInput = {
  ColumnKey?: string | null,
  Id?: string | null,
  PrintOrderNo?: string | null,
  id: string,
  printData?: string | null,
  tenant_id?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
  tenant_id?: string | null,
};

export type ModelSubscriptionItemFilterInput = {
  ItemCode?: ModelSubscriptionStringInput | null,
  ItemName?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLabelDataFilterInput = {
  ColumnKey?: ModelSubscriptionStringInput | null,
  Id?: ModelSubscriptionStringInput | null,
  PrintOrderNo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLabelDataFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionLabelDataFilterInput | null > | null,
  printData?: ModelSubscriptionStringInput | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  tenantId?: ModelStringInput | null,
  tenant_id?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type GetLabelDataQueryVariables = {
  id: string,
};

export type GetLabelDataQuery = {
  getLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      ItemCode?: string | null,
      ItemName?: string | null,
      createdAt: string,
      id: string,
      tenantId?: string | null,
      tenant_id?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListLabelDataQueryVariables = {
  filter?: ModelLabelDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLabelDataQuery = {
  listLabelData?:  {
    __typename: "ModelLabelDataConnection",
    items:  Array< {
      __typename: "LabelData",
      ColumnKey?: string | null,
      Id?: string | null,
      PrintOrderNo?: string | null,
      createdAt: string,
      id: string,
      printData?: string | null,
      tenantId?: string | null,
      tenant_id?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      tenantId?: string | null,
      tenant_id?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: CreateItemInput,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateLabelDataMutationVariables = {
  condition?: ModelLabelDataConditionInput | null,
  input: CreateLabelDataInput,
};

export type CreateLabelDataMutation = {
  createLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: DeleteItemInput,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteLabelDataMutationVariables = {
  condition?: ModelLabelDataConditionInput | null,
  input: DeleteLabelDataInput,
};

export type DeleteLabelDataMutation = {
  deleteLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  condition?: ModelItemConditionInput | null,
  input: UpdateItemInput,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateLabelDataMutationVariables = {
  condition?: ModelLabelDataConditionInput | null,
  input: UpdateLabelDataInput,
};

export type UpdateLabelDataMutation = {
  updateLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  tenantId?: string | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateLabelDataSubscriptionVariables = {
  filter?: ModelSubscriptionLabelDataFilterInput | null,
  tenantId?: string | null,
};

export type OnCreateLabelDataSubscription = {
  onCreateLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  tenantId?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  tenantId?: string | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteLabelDataSubscriptionVariables = {
  filter?: ModelSubscriptionLabelDataFilterInput | null,
  tenantId?: string | null,
};

export type OnDeleteLabelDataSubscription = {
  onDeleteLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  tenantId?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
  tenantId?: string | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    ItemCode?: string | null,
    ItemName?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateLabelDataSubscriptionVariables = {
  filter?: ModelSubscriptionLabelDataFilterInput | null,
  tenantId?: string | null,
};

export type OnUpdateLabelDataSubscription = {
  onUpdateLabelData?:  {
    __typename: "LabelData",
    ColumnKey?: string | null,
    Id?: string | null,
    PrintOrderNo?: string | null,
    createdAt: string,
    id: string,
    printData?: string | null,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  tenantId?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    tenantId?: string | null,
    tenant_id?: string | null,
    updatedAt: string,
  } | null,
};
