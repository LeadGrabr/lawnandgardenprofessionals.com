import { default as React } from 'react'
import { Textarea } from '@bentatum/rebass'

export default ({ error, ...props }) =>
  <Textarea
    invalid={error}
    message={error}
    {...props}
  />
