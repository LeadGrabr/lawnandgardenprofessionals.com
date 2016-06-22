import { default as React, Component, PropTypes } from 'react'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import { default as Joi } from 'joi'
import { Flex, Box } from 'reflexbox'
import { Button } from 'rebass'
import { services } from 'data'
import { createLead } from 'redux/modules/app'
import { connect } from 'react-redux'
import { default as styles } from './style.scss'

@connect(
  ({ app: { isSmallScreen, isMediumScreen } }) => ({
    isSmallScreen,
    isMediumScreen
  }),
  { submit: createLead }
)

export default class LeadForm extends Component {

  static propTypes = {
    isSmallScreen: PropTypes.bool,
    isMediumScreen: PropTypes.bool,
    status: PropTypes.oneOf([
      'pending',
      'success',
      'failure'
    ]),
    submit: PropTypes.func.isRequired
  };

  state = {}

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

  render () {
    const { isMediumScreen, isSmallScreen } = this.props
    const boxProps = {
      pr: 2,
      style: {
        width: isSmallScreen || isMediumScreen ? '100%' : '25%'
      }
    }
    return (
      <JoifulForm
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
        <Flex
          align='center'
          column={isSmallScreen || isMediumScreen}
          p={2}
        >
          <Box {...boxProps}>
            <JoifulInput
              hideLabel
              name='name'
              placeholder='Name'
              m={0}
            />
          </Box>
          <Box {...boxProps}>
            <JoifulInput
              hideLabel
              name='email'
              placeholder='Email'
              m={0}
            />
          </Box>
          <Box {...boxProps}>
            <JoifulInput
              hideLabel
              name='phone'
              placeholder='Phone'
              m={0}
            />
          </Box>
          <Box {...boxProps}>
            <JoifulInput
              is='select'
              hideLabel
              m={0}
              name='service'
              options={[
                { children: 'Service' },
                ...services.map(({ title }) => ({ children: title, value: title }))
              ]}
            />
          </Box>
          <Box {...boxProps} pr={0}>
            <Button style={{ width: '100%' }}>
              SUBMIT
            </Button>
          </Box>
        </Flex>
      </JoifulForm>
    )
  }
}
