import { default as React } from 'react'
import { Textarea } from 'prefixed-rebass'

export default ({ error, ...props }) =>
  <Textarea
    invalid={error}
    message={error}
    {...props}
  />
