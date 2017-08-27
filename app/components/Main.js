import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col
} from 'react-bootstrap';

export default class Main extends Component {
  render() {
    return (
        <ListGroup>
            <ListGroupItem list-group-item>
                <Row className="show-grid">
                    <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
                    <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
        </ListGroup>
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
Main.propTypes = {
}