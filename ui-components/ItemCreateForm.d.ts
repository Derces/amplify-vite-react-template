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
export declare type ItemCreateFormInputValues = {
    ItemCode?: string;
    ItemName?: string;
    tenant_id?: string;
};
export declare type ItemCreateFormValidationValues = {
    ItemCode?: ValidationFunction<string>;
    ItemName?: ValidationFunction<string>;
    tenant_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCreateFormOverridesProps = {
    ItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ItemCode?: PrimitiveOverrideProps<TextFieldProps>;
    ItemName?: PrimitiveOverrideProps<TextFieldProps>;
    tenant_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemCreateFormInputValues) => ItemCreateFormInputValues;
    onSuccess?: (fields: ItemCreateFormInputValues) => void;
    onError?: (fields: ItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemCreateFormInputValues) => ItemCreateFormInputValues;
    onValidate?: ItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemCreateForm(props: ItemCreateFormProps): React.ReactElement;
