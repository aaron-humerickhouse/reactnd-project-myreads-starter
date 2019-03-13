import React from 'react'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render() {
    return(
      <div className="list-books-title">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
