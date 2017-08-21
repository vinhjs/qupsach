import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import BookList from './containers/BookList'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/books" component={BookList} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
