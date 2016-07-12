import { default as React } from 'react'
import { Select } from 'prefixed-rebass'

export default ({ error, ...props }) =>
  <Select
    invalid={error}
    message={error}
    {...props}
  />
