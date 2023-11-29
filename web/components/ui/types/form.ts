import { Control, FieldErrors, FieldValues, RegisterOptions, UseFormWatch } from "react-hook-form";

export interface IFieldProps extends IFiledReactHookForm {
    name: string;
    disableMessage?: boolean;
}

export interface ICurentFieldProps {
    error?: string;
    disableMessage?: boolean;
}

export interface IFiledReactHookForm {
    control: Control<any, any>;
    errors?: FieldErrors<any>;
    watch?: UseFormWatch<any>;
    rules?: Omit<RegisterOptions<FieldValues, string>, "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate">;
}