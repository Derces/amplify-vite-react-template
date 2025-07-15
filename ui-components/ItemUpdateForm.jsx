/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getItem } from "./graphql/queries";
import { updateItem } from "./graphql/mutations";
const client = generateClient();
export default function ItemUpdateForm(props) {
  const {
    id: idProp,
    item: itemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ItemCode: "",
    ItemName: "",
    tenant_id: "",
  };
  const [ItemCode, setItemCode] = React.useState(initialValues.ItemCode);
  const [ItemName, setItemName] = React.useState(initialValues.ItemName);
  const [tenant_id, setTenant_id] = React.useState(initialValues.tenant_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemRecord
      ? { ...initialValues, ...itemRecord }
      : initialValues;
    setItemCode(cleanValues.ItemCode);
    setItemName(cleanValues.ItemName);
    setTenant_id(cleanValues.tenant_id);
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(itemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getItem.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getItem
        : itemModelProp;
      setItemRecord(record);
    };
    queryData();
  }, [idProp, itemModelProp]);
  React.useEffect(resetStateValues, [itemRecord]);
  const validations = {
    ItemCode: [],
    ItemName: [],
    tenant_id: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          ItemCode: ItemCode ?? null,
          ItemName: ItemName ?? null,
          tenant_id: tenant_id ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateItem.replaceAll("__typename", ""),
            variables: {
              input: {
                id: itemRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Item code"
        isRequired={false}
        isReadOnly={false}
        value={ItemCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ItemCode: value,
              ItemName,
              tenant_id,
            };
            const result = onChange(modelFields);
            value = result?.ItemCode ?? value;
          }
          if (errors.ItemCode?.hasError) {
            runValidationTasks("ItemCode", value);
          }
          setItemCode(value);
        }}
        onBlur={() => runValidationTasks("ItemCode", ItemCode)}
        errorMessage={errors.ItemCode?.errorMessage}
        hasError={errors.ItemCode?.hasError}
        {...getOverrideProps(overrides, "ItemCode")}
      ></TextField>
      <TextField
        label="Item name"
        isRequired={false}
        isReadOnly={false}
        value={ItemName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ItemCode,
              ItemName: value,
              tenant_id,
            };
            const result = onChange(modelFields);
            value = result?.ItemName ?? value;
          }
          if (errors.ItemName?.hasError) {
            runValidationTasks("ItemName", value);
          }
          setItemName(value);
        }}
        onBlur={() => runValidationTasks("ItemName", ItemName)}
        errorMessage={errors.ItemName?.errorMessage}
        hasError={errors.ItemName?.hasError}
        {...getOverrideProps(overrides, "ItemName")}
      ></TextField>
      <TextField
        label="Tenant id"
        isRequired={false}
        isReadOnly={false}
        value={tenant_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ItemCode,
              ItemName,
              tenant_id: value,
            };
            const result = onChange(modelFields);
            value = result?.tenant_id ?? value;
          }
          if (errors.tenant_id?.hasError) {
            runValidationTasks("tenant_id", value);
          }
          setTenant_id(value);
        }}
        onBlur={() => runValidationTasks("tenant_id", tenant_id)}
        errorMessage={errors.tenant_id?.errorMessage}
        hasError={errors.tenant_id?.hasError}
        {...getOverrideProps(overrides, "tenant_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || itemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || itemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
