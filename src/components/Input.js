import { default as React } from 'react'
import { Input } from 'rebass'

export default ({ error, ...props }) =>
  <Input
    invalid={error}
    message={error}
    {...props}
  />
