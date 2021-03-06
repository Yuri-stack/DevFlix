import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
  const { href, className, children } = props;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default ButtonLink;
