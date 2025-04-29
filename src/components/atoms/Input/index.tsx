
import { IInputProps } from '@/utils/interfaces';

export const Input = ({
  placeHolder,
  value = '',
  onChange,
  className = '',
  onFocus,
  onBlur,
  type = 'text',
}: IInputProps) => {
  return (
    <div className="w-full">
      <input
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`
          w-full
          px-4
          py-2
          text-gray-700
          bg-white
          border
          border-gray-300
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-primary-500
          focus:border-transparent
          placeholder:text-gray-400
          ${className}
        `}
      />
    </div>
  );
};

export default Input; 