import { default as React, Component, PropTypes } from 'react'
import { Base, Heading, Text } from 'prefixed-rebass'
import { Link } from 'react-router'
const { STATIC_ASSETS } = process.env
import { connect } from 'react-redux'

@connect(({ app: { screenSize } }) => ({ screenSize }))

export default class Service extends Component {

  static propTypes = {
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
    title: PropTypes.string.isRequired
  };

  imgMaxHeight () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return 150
      default:
        return 'none'
    }
  }

  render () {
    const { description, img, path, title, ...props } = this.props
    return (
      <Base {...props}>
        <Link to={path}>
          <div style={{ maxHeight: this.imgMaxHeight(), overflow: 'hidden' }}>
            <img
              src={`${STATIC_ASSETS}${img}`}
              style={{
                maxWidth: '100%',
                width: '100%'
              }}
            />
          </div>
        </Link>
        <Heading my={2} level={4}>
          <Link to={path}>
            {title}
          </Link>
        </Heading>
        <Text my={2} children={description} />
        <Text small bold my={2} style={{ textTransform: 'uppercase' }}>
          <Link to={path} children={title} />
        </Text>
      </Base>
    )
  }
}
