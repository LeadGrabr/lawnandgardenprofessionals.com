import { default as React } from 'react'
import { Input } from '@bentatum/rebass'

export default ({ error, ...props }) =>
  <Input
    invalid={error}
    message={error}
    {...props}
  />
