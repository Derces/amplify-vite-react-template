import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LabelDataCreateFormInputValues = {
    Id?: string;
    ColumnKey?: string;
    PrintOrderNo?: string;
    printData?: string;
    tenant_id?: string;
};
export declare type LabelDataCreateFormValidationValues = {
    Id?: ValidationFunction<string>;
    ColumnKey?: ValidationFunction<string>;
    PrintOrderNo?: ValidationFunction<string>;
    printData?: ValidationFunction<string>;
    tenant_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LabelDataCreateFormOverridesProps = {
    LabelDataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Id?: PrimitiveOverrideProps<TextFieldProps>;
    ColumnKey?: PrimitiveOverrideProps<TextFieldProps>;
    PrintOrderNo?: PrimitiveOverrideProps<TextFieldProps>;
    printData?: PrimitiveOverrideProps<TextFieldProps>;
    tenant_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LabelDataCreateFormProps = React.PropsWithChildren<{
    overrides?: LabelDataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LabelDataCreateFormInputValues) => LabelDataCreateFormInputValues;
    onSuccess?: (fields: LabelDataCreateFormInputValues) => void;
    onError?: (fields: LabelDataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LabelDataCreateFormInputValues) => LabelDataCreateFormInputValues;
    onValidate?: LabelDataCreateFormValidationValues;
} & React.CSSProperties>;
export default function LabelDataCreateForm(props: LabelDataCreateFormProps): React.ReactElement;
