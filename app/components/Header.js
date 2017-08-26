import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Navbar,
    FormGroup,
    FormControl,
    ControlLabel,
    Form,
    Button
} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar style={headerStyle}>
        <Form inline>
            <FormGroup controlId="formInlineUsername">
                <ControlLabel style={headerFromItem}>Username</ControlLabel>
                {' '}
                <FormControl style={headerFromInput} type="text" placeholder="vinh.tran" />
            </FormGroup>
            {' '}
            <FormGroup controlId="formInlinePassword">
                <ControlLabel style={headerFromItem}>Password</ControlLabel>
                {' '}
                <FormControl type="password" style={headerFromInput}/>
            </FormGroup>
            {' '}
            <Button bsStyle="primary" type="submit" style={headerFromItem}>
                Login
            </Button>
        </Form>
      </Navbar>
    )
  }
}
const headerStyle = {
  textAlign: 'right',
  paddingTop: 10
};
const headerFromItem = {
    fontSize: 12
}
const headerFromInput = {
    fontSize: 12,
    width: 100
}
Header.propTypes = {
}