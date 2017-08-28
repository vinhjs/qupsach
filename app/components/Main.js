import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Button
} from 'react-bootstrap';

export default class Main extends Component {
  render() {
    return (
        <ListGroup>
            <ListGroupItem list-group-item>
                <Row className="show-grid">
                    <Col xs={1} md={1}>
                        <figure class="pull-left">
                            <img class="media-object img-rounded img-responsive"  src="http://via.placeholder.com/100x150" alt="placehold.it/350x250" />
                        </figure>
                    </Col>
                    <Col xs={12} md={9}>
                        <h4 class="list-group-item-heading"> List group heading </h4>
                        <p class="list-group-item-text"> Qui diam libris ei, vidisse incorrupte at mel. His euismod salutandi dissentiunt eu. Habeo offendit ea mea. Nostro blandit sea ea, viris timeam molestiae an has. At nisl platonem eum. 
                            Vel et nonumy gubergren, ad has tota facilis probatus. Ea legere legimus tibique cum, sale tantas vim ea, eu vivendo expetendis vim. Voluptua vituperatoribus et mel, ius no elitr deserunt mediocrem. Mea facilisi torquatos ad.
                        </p>
                    </Col>
                    <Col style={itemStyle}>
                        <h2> 14240 <small> votes </small></h2>
                        <Button bsSize="large" bsStyle="info"> Vote Now! </Button>
                    </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
        </ListGroup>
    )
  }
}
const itemStyle = {
  textAlign: 'center'
};
const stars = {
     margin:'20px auto 1px'
}
const headerFromInput = {
    fontSize: 12,
    width: 100
}
Main.propTypes = {
}