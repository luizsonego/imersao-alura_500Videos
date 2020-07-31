import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  return (
    <a href={props.href} className={props.className}>{props.children}</a>
  );
}

Button.defaultProps = {
  href: '',
  className: '',
  children: '',
};

Button.propTypes = {
  href: propTypes.string,
  className: propTypes.string,
  children: propTypes.string,
};

export default Button;
