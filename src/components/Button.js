import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, onClick }) => {
    return (
        <button
        className='header btn'
        onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    text: 'Text',
}

Button.propTypes = {
    text: PropTypes.string,
}

export default Button
