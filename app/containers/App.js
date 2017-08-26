import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../actions/actions'
import Header from '../components/Header'
import Picker from '../components/Picker'
import Posts from '../components/Posts'
import {
    PageHeader
} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
    
  }

  handleChange(nextSubreddit) {
  }

  render() {
    const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
      <div style={mainStyle}>
        <Header/>
      </div>
    )
  }
}
const mainStyle = {
    marginTop: 0,
    padingTop: 10
}

App.propTypes = {
}

function mapStateToProps(state) {
  
}

export default connect(mapStateToProps)(App)