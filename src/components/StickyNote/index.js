import { default as React } from 'react'
import { Base } from '@bentatum/rebass'
import { default as styles } from './style.scss'

const StickyNote = ({ style, ...props }) =>
  <Base
    p={2}
    className={styles.stickyNote}
    style={{
      position: 'relative',
      ...style
    }}
    {...props}
  />

export default StickyNote
