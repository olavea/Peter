import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import logo from '../images/Young_Beatrix_Potter.jpg'
import pogo from '../images/uniparrot4.png'
// the path to the image
/// back one dir ../

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
    <HeaderContainer />
  </HeaderWrapper>
)

export default Header

{
  /*
  <h3 className="nextpage">
          <span>{this.props.nextPage}</span>
        </h3>

ta imot submit eller onClick

  Hva bruker jeg for å bestemme hva som er denne siden?
Hva bruker vi for å bestemme hva som er neste side?
skal jeg bruke markdown? for å lage sidene?
jaaa... følege oppøegget til Scott
skal jeg bruke navnet på page`?

hvordan bytter jeg side?
*/
}

//ffa500 orange
// #ffce00 yellow

// <button>
//           <Link to="/2">This page +1 Page -> </Link>
//         </button>
{
  /*page query slug next page , markdown something */
}
