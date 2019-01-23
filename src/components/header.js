import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/peter-icon8_eye.png'

const HeaderWrapper = styled.div`
  background: #ffffff;
  margin-bottom: 0.11rem;
  img {
    margin-bottom: 0;
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.33rem;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img
            style={{
              width: '66px',
            }}
            src={logo}
            alt="Geff Logo"
          />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header

//ffa500 orange
// #ffce00 yellow

// <button>
//           <Link to="/2">This page +1 Page -> </Link>
//         </button>
