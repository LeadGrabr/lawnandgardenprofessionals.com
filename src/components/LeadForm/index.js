import { default as React, Component, PropTypes } from 'react'
import { JoifulForm, JoifulInput } from 'joiful-react-forms'
import { default as Joi } from 'joi'
import { Flex, Box } from 'reflexbox'
import { Button } from 'rebass'
import { services } from 'data'
import { createLead } from 'redux/modules/app'
import { connect } from 'react-redux'
import { default as styles } from './style.scss'

@connect(() => ({}), { submit: createLead })

export default class LeadForm extends Component {

  static propTypes = {
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
    return (
      <JoifulForm
        className={styles.form}
        onChange={(e, formValues) => this.setState({ formValues })}
        onSubmit={::this.handleSubmit}
        schema={{
          name: Joi.string().required(),
          email: Joi.string().email().required(),
          phone: Joi.string().regex(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/gi).options({
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
          column
          p={2}
        >
          <Box col={12}>
            <JoifulInput
              hideLabel
              name='name'
              placeholder='Name (Required)'
            />
          </Box>
          <Box col={12}>
            <JoifulInput
              hideLabel
              name='email'
              placeholder='Email (Required)'
            />
          </Box>
          <Box col={12}>
            <JoifulInput
              hideLabel
              name='phone'
              placeholder='Phone (Required)'
            />
          </Box>
          <Box col={12}>
            <JoifulInput
              is='select'
              hideLabel
              name='service'
              options={[
                { children: 'Select Service' },
                ...services.map(({ title }) => ({ children: title, value: title }))
              ]}
            />
          </Box>
          <Box col={12}>
            <Button
              style={{ width: '100%' }}
            >
              SUBMIT
            </Button>
          </Box>
        </Flex>
      </JoifulForm>
    )
  }
}
