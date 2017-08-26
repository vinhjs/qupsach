import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Table
} from 'react-bootstrap';

export default class Posts extends Component {
  render() {
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Des</th>
          </tr>
        </thead>
        <tbody>
          {this.props.posts.map((post, i) => 
            <tr> 
              <td> {i+1}
              </td>
              <td>
                {post.title}
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}