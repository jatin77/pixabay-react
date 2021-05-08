import React from 'react';
import './styles.css';
import logo from '../../../logo.png';

const Header = ({ onChangeHandle, searchedImage, homeClicked, submitForm }) => (
  <header>
    <div className='header-logo'>
      <img
        src={logo}
        alt='logo'
        style={{ width: '60px', borderRadius: '50%' }}
      />
    </div>
    <div className='header-rights'>
      <p>
        7e Edition <br /> -codefreeeze@gmail.com
      </p>
    </div>
    <form onSubmit={submitForm}>
      <div className='header-search'>
        <input
          name='searchText'
          onChange={onChangeHandle}
          value={searchedImage}
          type='text'
          required
        />
        <button className='search-icon'>
          <i className='fas fa-search' />
        </button>
      </div>
    </form>
    <div className='header-home'>
      <i onClick={homeClicked} className='fas fa-home' />
    </div>
  </header>
);

export default Header;
