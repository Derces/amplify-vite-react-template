import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { LabelData } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LabelDataUpdateFormInputValues = {
    Id?: string;
    ColumnKey?: string;
    PrintOrderNo?: string;
    printData?: string;
    tenant_id?: string;
};
export declare type LabelDataUpdateFormValidationValues = {
    Id?: ValidationFunction<string>;
    ColumnKey?: ValidationFunction<string>;
    PrintOrderNo?: ValidationFunction<string>;
    printData?: ValidationFunction<string>;
    tenant_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabelDataUpdateFormOverridesProps = {
    LabelDataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Id?: PrimitiveOverrideProps<TextFieldProps>;
    ColumnKey?: PrimitiveOverrideProps<TextFieldProps>;
    PrintOrderNo?: PrimitiveOverrideProps<TextFieldProps>;
    printData?: PrimitiveOverrideProps<TextFieldProps>;
    tenant_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabelDataUpdateFormProps = React.PropsWithChildren<{
    overrides?: LabelDataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    labelData?: LabelData;
    onSubmit?: (fields: LabelDataUpdateFormInputValues) => LabelDataUpdateFormInputValues;
    onSuccess?: (fields: LabelDataUpdateFormInputValues) => void;
    onError?: (fields: LabelDataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LabelDataUpdateFormInputValues) => LabelDataUpdateFormInputValues;
    onValidate?: LabelDataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LabelDataUpdateForm(props: LabelDataUpdateFormProps): React.ReactElement;
