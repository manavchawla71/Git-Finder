import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <a href="https://github.com/manavchawla71"><center><i className={icon} /></center></a>
        {'   '}
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Repo Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
