import Button, { ButtonProps } from "@mui/material/Button";

export type PrimaryButtonProps = Omit<ButtonProps, 'ref'> & {
  label: string;
  fullwidth?: boolean;
  loading?: boolean,
};

const PrimaryButton = (props: PrimaryButtonProps) => {
  const {
    color = 'primary',
    label,
    variant = 'contained',
    fullwidth = true,
    type = 'submit',
    size = 'large',
    style,
    loading = false,
    key,
    disabled = false,
    ...otherProps
  } = props;

  return (
    <Button
      color={color}
      variant={variant}
      type={type}
      size={size}
      fullWidth={fullwidth}
      style={style}
      key={key}
      disabled={disabled || loading}
      {...otherProps}
    >{label}</Button>

  );
};

export default PrimaryButton;