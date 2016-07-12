import { default as React, Component, PropTypes } from 'react'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import { default as Joi } from 'joi'
import { Flex, Box } from 'reflexbox'
import { Button } from 'rebass'
import { services } from 'data'
import { createLead, SUBMIT_LEAD } from 'redux/modules/app'
import { default as styles } from './style.scss'
import { connect } from 'react-redux'
import { ThreeBounce } from 'better-react-spinkit'
import { default as SuccessIcon } from 'react-icons/lib/fa/check-square-o'
import { default as equal } from 'deep-equal'

@connect(
  ({ app: { screenSize }, await: { statuses } }) => ({
    screenSize,
    status: statuses[SUBMIT_LEAD]
  }),
  { submit: createLead }
)

export default class LeadForm extends Component {

  static propTypes = {
    screenSize: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    status: PropTypes.oneOf(['pending', 'success', 'failure']),
    submit: PropTypes.func.isRequired
  };

  static contextTypes = {
    colors: PropTypes.object.isRequired
  };

  state = {
    formValues: {},
    submittedValues: {}
  }

  componentDidUpdate (nextProps, { submittedValues }) {
    if (!equal(submittedValues, this.state.submittedValues)) {
      this.setState({
        formValues: {}
      })
    }
  }

  handleSubmit (error) {
    if (error) {
      return false
    }

    const { formValues } = this.state

    this.setState({
      submittedValues: formValues
    })

    return this.props.submit(formValues)
  }

  boxCols () {
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return undefined
      case 'medium':
        return 6
      default:
        return 12
    }
  }

  submitButtonCols () {
    if (this.props.column) {
      return 12
    }
    switch (this.props.screenSize) {
      case 'xlarge':
      case 'large':
        return undefined
      default:
        return 12
    }
  }

  render () {
    const { colors: { white } } = this.context
    const { column, screenSize, status } = this.props
    const isSmall = screenSize === 'small'
    const isMedium = screenSize === 'medium'
    const isLarge = screenSize === 'large' || screenSize === 'xlarge'
    const isMobile = isSmall || isMedium
    const boxSpace = 1
    const boxProps = {
      col: column ? 12 : this.boxCols(),
      mb: column ? boxSpace : isSmall || isMedium ? boxSpace : 0,
      pr: isSmall ? 0 : boxSpace,
      style: isLarge && {
        width: '25%'
      }
    }
    const inputProps = {
      disabled: status === 'pending',
      m: 0
    }
    return (
      <JoifulForm
        method='post'
        className={styles.form}
        onChange={(e, formValues) => this.setState({ formValues })}
        onSubmit={::this.handleSubmit}
        schema={{
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          phone: Joi.string().regex(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/gi).required().options({
            language: {
              string: {
                regex: {
                  base: 'entry "{{!value}}" doesn\'t look like a valid US phone number, such as: 248-333-5555'
                }
              }
            }
          }),
          service: Joi.string().min(3)
        }}
        values={this.state.formValues}
      >
        <Flex column={column} align='center' wrap={isMobile}>
          <Box {...boxProps}>
            <JoifulInput
              hideLabel
              name='name'
              placeholder='Name'
              {...inputProps}
            />
          </Box>
          <Box {...boxProps} pr={isMobile ? 0 : boxSpace}>
            <JoifulInput
              hideLabel
              name='email'
              placeholder='Email'
              {...inputProps}
            />
          </Box>
          <Box {...boxProps}>
            <JoifulInput
              hideLabel
              name='phone'
              placeholder='Phone'
              {...inputProps}
            />
          </Box>
          <Box {...boxProps} pr={isMobile ? 0 : boxSpace}>
            <JoifulInput
              is='select'
              hideLabel
              name='service'
              options={[
                { children: 'Service' },
                ...services.map(({ title }) => ({ children: title, value: title }))
              ]}
              {...inputProps}
            />
          </Box>
          <Box col={this.submitButtonCols()} style={isLarge && { width: '25%' }}>
            <Button style={{ width: '100%' }} disabled={status === 'pending'}>
              <Choose>
                <When condition={status === 'pending'}>
                  <ThreeBounce color={white} size={10} />
                </When>
                <When condition={status === 'success'}>
                  Sent <SuccessIcon style={{ color: white }} />
                </When>
                <Otherwise>
                  Submit
                </Otherwise>
              </Choose>
            </Button>
          </Box>
        </Flex>
      </JoifulForm>
    )
  }
}
