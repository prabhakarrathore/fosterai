import React from 'react';
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material';
import { useFormContext } from 'react-hook-form';

type MyTextFieldProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  type?: string;
  minLength?: number;
  maxLength?: number;
  disabled?: boolean;
  autocomplete?: string;
  multiline?: boolean;
  rows?: number,
  defaultValue?: any;
  variant?: 'standard' | 'outlined' | 'filled';
  size?: 'small' | 'medium';
  endAdornment?: JSX.Element;
  startAdornment?: JSX.Element;
  items?: Array<{ value: string, label: string }>;
  helperText?: boolean;
  shrink?: boolean | undefined;
  accept?: string | undefined;
  labelColor?: string;
  labelSuffix?: string; // New prop for content after the label
};

const MyTextField: React.FC<MyTextFieldProps> = ({
  label,
  name,
  required,
  placeholder,
  multiline,
  rows,
  autocomplete,
  type,
  disabled,
  defaultValue,
  variant,
  size,
  endAdornment,
  startAdornment,
  items,
  shrink,
  helperText = true,
  accept,
  labelColor = '#black', // Default to text-primary
  labelSuffix,  // Accept custom label suffix
}) => {
  const { register, formState: { errors } } = useFormContext();

  const Label = () => (
    <>
      <span className={labelColor}>
        {label} {required && <span className="text-red-500">*</span>}
        {labelSuffix && <span className="text-gray-500 ml-1">{labelSuffix}</span>}
      </span>
    </>
  );

  if (items) {
    return (
      <TextField
        label={<Label />}
        {...register(name)}
        variant={variant || 'outlined'}
        error={!!errors[name]}
        placeholder={placeholder}
        autoComplete={autocomplete}
        helperText={errors[name] && helperText && (errors as any)[name].message}
        fullWidth
        rows={rows}
        defaultValue={defaultValue}
        multiline={multiline}
        size={size || 'small'}
        type={type || 'text'}
        disabled={disabled}
        select
        InputLabelProps={{
          shrink: shrink ? true : undefined,
        }}
      >
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </TextField>
    );
  }

  return (
    <TextField
      label={<Label />}
      {...register(name)}
      variant={variant || 'outlined'}
      error={!!errors[name]}
      placeholder={placeholder}
      autoComplete={autocomplete}
      helperText={errors[name] && helperText && (errors as any)[name].message}
      fullWidth
      rows={rows}
      defaultValue={defaultValue}
      multiline={multiline}
      size={size || 'small'}
      type={type || 'text'}
      disabled={disabled}
      InputLabelProps={shrink ? { shrink } : undefined}
      InputProps={{
        startAdornment: startAdornment || undefined,
        endAdornment: endAdornment || undefined,
      }}
      inputProps={type === 'file' ? { accept } : undefined}
    />
  );
};

export default MyTextField;
