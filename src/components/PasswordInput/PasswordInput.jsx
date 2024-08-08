import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { Visibility, VisibilityOff } from '@mui/icons-material';


const PasswordInput = ({
  label,
  fullWidth = false,
  name,
  id,
  value,
  onChange,
  onBlur,
  error = false,
  helperText = '',
  register,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      label={label}
      fullWidth={fullWidth}
      type={showPassword ? 'text' : 'password'}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      InputLabelProps={{
        sx: { fontSize: '1.5rem' },
      }}
      {...rest}
      InputProps={{
        style: { fontSize: '2rem' },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePasswordVisibility}>
              {showPassword ? <VisibilityOff sx={{ color: '#666360' }} /> : <Visibility sx={{ color: '#666360' }} />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...register}
    />
  );
};

export default PasswordInput;