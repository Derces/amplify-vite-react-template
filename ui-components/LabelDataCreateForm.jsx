/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createLabelData } from "./graphql/mutations";
const client = generateClient();
export default function LabelDataCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Id: "",
    ColumnKey: "",
    PrintOrderNo: "",
    printData: "",
    tenant_id: "",
  };
  const [Id, setId] = React.useState(initialValues.Id);
  const [ColumnKey, setColumnKey] = React.useState(initialValues.ColumnKey);
  const [PrintOrderNo, setPrintOrderNo] = React.useState(
    initialValues.PrintOrderNo
  );
  const [printData, setPrintData] = React.useState(initialValues.printData);
  const [tenant_id, setTenant_id] = React.useState(initialValues.tenant_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setId(initialValues.Id);
    setColumnKey(initialValues.ColumnKey);
    setPrintOrderNo(initialValues.PrintOrderNo);
    setPrintData(initialValues.printData);
    setTenant_id(initialValues.tenant_id);
    setErrors({});
  };
  const validations = {
    Id: [],
    ColumnKey: [],
    PrintOrderNo: [],
    printData: [],
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
          Id,
          ColumnKey,
          PrintOrderNo,
          printData,
          tenant_id,
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
            query: createLabelData.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "LabelDataCreateForm")}
      {...rest}
    >
      <TextField
        label="Id"
        isRequired={false}
        isReadOnly={false}
        value={Id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id: value,
              ColumnKey,
              PrintOrderNo,
              printData,
              tenant_id,
            };
            const result = onChange(modelFields);
            value = result?.Id ?? value;
          }
          if (errors.Id?.hasError) {
            runValidationTasks("Id", value);
          }
          setId(value);
        }}
        onBlur={() => runValidationTasks("Id", Id)}
        errorMessage={errors.Id?.errorMessage}
        hasError={errors.Id?.hasError}
        {...getOverrideProps(overrides, "Id")}
      ></TextField>
      <TextField
        label="Column key"
        isRequired={false}
        isReadOnly={false}
        value={ColumnKey}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              ColumnKey: value,
              PrintOrderNo,
              printData,
              tenant_id,
            };
            const result = onChange(modelFields);
            value = result?.ColumnKey ?? value;
          }
          if (errors.ColumnKey?.hasError) {
            runValidationTasks("ColumnKey", value);
          }
          setColumnKey(value);
        }}
        onBlur={() => runValidationTasks("ColumnKey", ColumnKey)}
        errorMessage={errors.ColumnKey?.errorMessage}
        hasError={errors.ColumnKey?.hasError}
        {...getOverrideProps(overrides, "ColumnKey")}
      ></TextField>
      <TextField
        label="Print order no"
        isRequired={false}
        isReadOnly={false}
        value={PrintOrderNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              ColumnKey,
              PrintOrderNo: value,
              printData,
              tenant_id,
            };
            const result = onChange(modelFields);
            value = result?.PrintOrderNo ?? value;
          }
          if (errors.PrintOrderNo?.hasError) {
            runValidationTasks("PrintOrderNo", value);
          }
          setPrintOrderNo(value);
        }}
        onBlur={() => runValidationTasks("PrintOrderNo", PrintOrderNo)}
        errorMessage={errors.PrintOrderNo?.errorMessage}
        hasError={errors.PrintOrderNo?.hasError}
        {...getOverrideProps(overrides, "PrintOrderNo")}
      ></TextField>
      <TextField
        label="Print data"
        isRequired={false}
        isReadOnly={false}
        value={printData}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Id,
              ColumnKey,
              PrintOrderNo,
              printData: value,
              tenant_id,
            };
            const result = onChange(modelFields);
            value = result?.printData ?? value;
          }
          if (errors.printData?.hasError) {
            runValidationTasks("printData", value);
          }
          setPrintData(value);
        }}
        onBlur={() => runValidationTasks("printData", printData)}
        errorMessage={errors.printData?.errorMessage}
        hasError={errors.printData?.hasError}
        {...getOverrideProps(overrides, "printData")}
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
              Id,
              ColumnKey,
              PrintOrderNo,
              printData,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
