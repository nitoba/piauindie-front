import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea as CkTextArea,
  TextareaProps,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

type Props = {
  iconLeft?: ReactNode
  label?: string
  errorMessage?: string
  isRequired?: boolean
} & TextareaProps

export function TextArea({
  label,
  iconLeft,
  isInvalid,
  errorMessage,
  isRequired,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid
  return (
    <FormControl isInvalid={invalid} isRequired={isRequired}>
      {label && <FormLabel>{label}</FormLabel>}

      <CkTextArea focusBorderColor="brand.500" px="3" {...props} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}
