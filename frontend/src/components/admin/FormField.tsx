import type { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from 'react';

interface BaseProps {
  label: string;
  error?: string;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: 'input' };
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' };
type SelectProps = BaseProps & SelectHTMLAttributes<HTMLSelectElement> & { as: 'select'; children: ReactNode };

type FormFieldProps = InputProps | TextareaProps | SelectProps;

export default function FormField(props: FormFieldProps) {
  const { label, error, as = 'input', ...rest } = props;
  const baseClass = 'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none text-sm';
  const errorClass = error ? 'border-red-300 focus:ring-red-500' : '';

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      {as === 'textarea' ? (
        <textarea className={`${baseClass} ${errorClass}`} rows={4} {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)} />
      ) : as === 'select' ? (
        <select className={`${baseClass} ${errorClass}`} {...(rest as SelectHTMLAttributes<HTMLSelectElement>)}>
          {(props as SelectProps).children}
        </select>
      ) : (
        <input className={`${baseClass} ${errorClass}`} {...(rest as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
