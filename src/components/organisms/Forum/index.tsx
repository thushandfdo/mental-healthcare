import { Button } from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { Typography } from '@/components/atoms/Typography';
import { CustomFormProps, FormField } from '@/utils/interfaces';
import React, { useState } from 'react';






export const CustomForm  = ({
  title,
  fields,
  submitButtonText,
  onSubmit,
  footer,
  additionalText
}: CustomFormProps)  => {
  // Initialize state with empty values for each field
  const initialState = fields.reduce((acc, field) => {
    acc[field.id] = field.type === 'checkbox' ? false : '';
    return acc;
  }, {} as Record<string, any>);

  const [formData, setFormData] = useState<Record<string, any>>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [id]: val
    }));
    
    // Clear error when field is changed
    if (errors[id]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    fields.forEach(field => {
      if (field.required) {
        if (!formData[field.id]) {
          newErrors[field.id] = `${field.label} is required`;
        }
      }
      
      // Email validation
      if (field.type === 'email' && formData[field.id]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.id])) {
          newErrors[field.id] = 'Please enter a valid email address';
        }
      }
      
      // Password validation can be added here if needed
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md items-center justify-center ">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{title}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field.id} className="space-y-1">
            <label 
              htmlFor={field.id} 
              className="block text-sm font-medium text-gray-700"
            >
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <select
                id={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required={field.required}
              >
                <option value="">Select {field.label}</option>
                {field.options?.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : field.type === 'checkbox' ? (
              <div className="flex items-center">
                <input
                  id={field.id}
                  type="checkbox"
                  checked={formData[field.id]}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                {/* <Input  value={formData[field.id]} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" placeHolder={field.placeholder} /> */}
                <label htmlFor={field.id} className="ml-2 block text-sm text-gray-700">
                  {field.placeholder}
                </label>
              </div>
            ) : (
              // <input
              //   id={field.id}
              //   type={field.type}
              //   value={formData[field.id]}
              //   onChange={handleChange}
              //   placeholder={field.placeholder}
              //   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              //   required={field.required}
              // />
              <Input placeHolder={field.placeholder} value={formData[field.id]} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            )}
            
            {errors[field.id] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.id]}</p>
            )}
          </div>
        ))}
        
        {additionalText && (
          <p className="text-sm text-gray-600">{additionalText}</p>
        )}
        
        {/* <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {submitButtonText}
        </button> */}
        <Button label={submitButtonText} type="primary" className="w-full  pl-[45%]" onClick={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </form>
      
      {footer && (
        <div className="mt-4 text-center">
          {footer}
        </div>
      )}
    </div>
  );
};













// Example usage for Login Form

// export const LoginForm: React.FC<{ onSubmit: (data: any) => void }> = ({ onSubmit }) => {
export const LoginForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const loginFields: FormField[] = [
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password',
      required: true
    },
    {
      id: 'rememberMe',
      label: 'Remember Me',
      type: 'checkbox',
      placeholder: 'Remember me'
    }
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mt-20 ">
    <CustomForm
     
      title="Login to Your Account"
      fields={loginFields}
      submitButtonText="Login"
      onSubmit={onSubmit}
      footer={
        <div>
          {/* <p className="text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register here</a>
          </p> */}
          <a href="/register" className="block mt-2 text-sm text-blue-600 hover:underline">
            <Typography label="Don't have an account? Register here" variant="p" className="text-blue-600 hover:underline"  />
          </a>
          {/* <a href="/forgot-password" className="block mt-2 text-sm text-blue-600 hover:underline">
            Forgot your password?
          </a> */}
          <Typography label="Forgot your password?" variant="p" className="text-black-600 hover:underline" />
        </div>
      }
    />
    </div>
  );
};

// Example usage for Registration Form
export const RegisterForm= ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const registerFields: FormField[] = [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'Enter your full name',
      required: true
    },
    {
      id: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
      required: true
    },
    {
      id: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Create a password',
      required: true
    },
    {
      id: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password',
      required: true
    },
    {
      id: 'agreeTerms',
      label: 'Terms',
      type: 'checkbox',
      placeholder: 'I agree to the Terms and Conditions',
      required: true
    }
  ];

  return (
    <CustomForm
      title="Create an Account"
      fields={registerFields}
      submitButtonText="Register"
      onSubmit={onSubmit}
      additionalText="By registering, you agree to our Terms of Service and Privacy Policy."
      footer={
        // <p className="text-sm text-gray-600">
        //   Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login here</a>
        // </p>
        <Typography label="Already have an account? Login here" variant="p" className="text-gray-600 hover:text-blue-600 hover:underline" />
      }
    />
  );
};