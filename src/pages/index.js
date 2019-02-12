import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import zero from '../images/peter04.jpg'
import SEO from '../components/seo'
import styled from 'styled-components'
import logo from '../images/peter-icon2.png'
import Header from '../components/header'

const NavWrapper = styled.div`
  background: #ffa500;

  margin-bottom: 0.33rem;
  img {
    margin-bottom: 0;
  }
`

const NavContainer = styled.div`
  margin: 0 auto;

  max-width: 960px;
  padding: 0.33rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <img
      style={{
        width: '1333px',
      }}
      src={zero}
      alt="Geff zero"
    />
    <h1>THE TALE OF PETER RABBIT</h1>
    <h2>BY BEATRIX POTTER</h2>
    <NavWrapper>
      <NavContainer>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/00_english"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            <img
              style={{
                width: '333px',
              }}
              src={logo}
              alt="Geff Logo"
            />
          </Link>
        </h1>
      </NavContainer>
    </NavWrapper>
    <div>
      <Header nextPage="/wes/26_english " />
    </div>
  </Layout>
)

export default IndexPage
