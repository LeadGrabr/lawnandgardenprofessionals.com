import { default as React } from 'react'
import { PageHeader } from 'components'
import { Link } from 'react-router'
import { default as styles } from './style.scss'

const InstantQuote = () =>
  <div>
    <PageHeader
      heading='Get an Instant Quote'
      breadcrumbs={[
        { children: 'Home', is: Link, to: '/' },
        { children: 'Instant Quote', is: Link, to: '/instant-quote', activeClassName: styles.activeNavItem }
      ]}
    />
  </div>

export default InstantQuote
