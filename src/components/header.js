import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from './logo'

const Header = ({ siteTitle , siteLogo }) => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#0500ff',
            textDecoration: 'none',
            fontFamily: 'AvenirNext-Bold',
            fontSize: '32px',
            lineHeight: 1.25
          }}
        >
          Kalanjana
        </Link>
      </h1>
      <Link to="/" 
        style={{
          textDecoration: 'none',
          fontFamily: 'AvenirNext',
          fontSize: '18px',
          color: '#191847',
          lineHeight: 1.25
        }}>
          Home
       </Link>
      <Link to="/" 
        style={{
          textDecoration: 'none',
          fontFamily: 'AvenirNext',
          fontSize: '18px',
          color: '#191847',
          lineHeight: 1.25
        }}>Tentang Kami</Link>
      <Link to="/" 
        style={{
          textDecoration: 'none',
          fontFamily: 'AvenirNext',
          fontSize: '18px',
          color: '#191847',
          lineHeight: 1.25
        }}>Teknologi</Link>
      <button style={{
        fontFamily: 'AvenirNext-DemiBold', 
        fontSize: '14px',
        fontWeight: 'bold',
        maxWidth: '150px',
        minWidth: '150px',
        minHeight: '25px',
        marginBottom: '1.45rem',
        backgroundColor: '#2b44ff',
        color: 'white',
        fontWeight: 'bold',
        borderRadius: '4px',
        padding: '10px' }}
        >
        Mulai Project
      </button>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
