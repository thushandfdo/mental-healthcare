import { ITypography, ITypographyProps } from 'utils/interfaces';

const variantMapping: ITypography = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-normal',
    h5: 'text-lg font-light',
    h6: 'text-base font-thin',
    p: 'text-base font-normal'
};

export const Typography = ({ label, variant = 'p', className }: ITypographyProps) => {
    return (
        <p className={`m-0 ${className} ${variantMapping[variant]}`}>
            {label}
        </p>
    )
};
