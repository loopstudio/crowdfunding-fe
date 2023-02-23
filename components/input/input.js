import { forwardRef } from 'react';

import { Label } from 'pages/create/create.styles';
import { StyledInput } from './input.styles';

export const Input = forwardRef(function InputWithRef(
  { name, label, error, type, ...props },
  ref
) {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <StyledInput type={type} name={name} id={name} {...props} ref={ref} />
      {error && (
        <p style={{ color: 'red', margin: 0, fontFamily: 'Share Tech Mono' }}>
          {error.message}
        </p>
      )}
    </>
  );
});
