import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { category, flashCard } from 'utils/types';

export interface ITypographyProps {
    label: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'p1';
    className?: string;
}

export interface ITypography {
    [key: string]: string | any;
}

export interface IButtonProps {
    onClick: () => void;
    label: string;
    isLoading?: boolean;
    className?: string;
    isDisable?: boolean;
    type?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
    | 'default';
}

export interface INavBarProps {
    searchValue: string;
    setSearchValue: Dispatch<SetStateAction<string>>;
}

export interface IInputProps {
    placeHolder: string | undefined;
    value: string | number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    onFocus?: () => void;
    onBlur?: () => void;
    type?: 'text' | 'number';
}

export interface ICheckBox {
    value: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    className?: string;
}

export interface ITextAreaProps {
    placeHolder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    onFocus?: () => void;
    onBlur?: () => void;
}

export interface IFlashCardSetProps {
    item: category;
    onClick: () => void;
}

export interface IFlashCardProps {
    item: flashCard;
    onClick: () => void;
}

export interface IErrorProps {
    label: string;
}

export interface IReviewComponentProps {
    setId: string | undefined;
    handleModalClose: () => void;
}

export interface JwtPayload {
    id: string;
    email: string;
    role: number;
    iat: number;
    exp: number;
}

// Define types for form field configuration
export interface FormField {
    id: string;
    label: string;
    type: 'text' | 'email' | 'password' | 'checkbox' | 'select';
    placeholder?: string;
    options?: { value: string; label: string }[];
    required?: boolean;
  }
// Form props interface
export interface CustomFormProps {
    title: string;
    fields: FormField[];
    submitButtonText: string;
    onSubmit: (formData: Record<string, any>) => void;
    footer?: React.ReactNode;
    additionalText?: string;
  }