import { default as React, Component, PropTypes } from 'react'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import { default as Joi } from 'joi'
import { Flex, Box } from 'prefixed-reflexbox'
import { Button } from 'prefixed-rebass'
import { createLead, SUBMIT_LEAD } from 'redux/modules/app'
import { default as styles } from './style.scss'
import { connect } from 'react-redux'
import { ThreeBounce } from 'better-react-spinkit'
import { default as SuccessIcon } from 'react-icons/lib/fa/check-square-o'
import { default as equal } from 'deep-equal'

@connect(({ await: { statuses } }) => ({ status: statuses[SUBMIT_LEAD] }), { submit: createLead })

export default class ContactForm extends Component {

  static propTypes = {
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

  render () {
    const { status } = this.props
    const { colors: { white } } = this.context
    const boxProps = {
      mb: 1,
      pr: 0,
      style: {
        width: '100%'
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
          message: Joi.string().min(3)
        }}
        values={this.state.formValues}
      >
        <Flex column align='center'>
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
              is='textarea'
              hideLabel
              m={0}
              name='message'
              placeholder='Message'
            />
          </Box>
          <Box {...boxProps} mb={0} pr={0}>
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
