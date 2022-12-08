import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/form-control'
import {
  Input as CkInput,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { ReactNode, useState } from 'react'

type Props = {
  iconLeft?: ReactNode
  label?: string
  errorMessage?: string
  isRequired?: boolean
} & InputProps

export function Input({
  label,
  iconLeft,
  isInvalid,
  errorMessage,
  type,
  isRequired,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid
  const [showPassword, setShowPassword] = useState(type !== 'password')
  return (
    <FormControl isInvalid={invalid} isRequired={isRequired}>
      {label && <FormLabel>{label}</FormLabel>}

      <InputGroup>
        {iconLeft && <InputLeftElement>{iconLeft}</InputLeftElement>}
        <CkInput focusBorderColor="brand.500" px="3" {...props} />
        {type === 'password' && (
          <InputRightElement onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <ViewOffIcon /> : <ViewIcon />}
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
