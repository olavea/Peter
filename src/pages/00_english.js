import React from 'react'
import Layout from '../components/layout'
import zero from '../images/peter02.gif'
// import Listing from '../components/Listing'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/uniparrot4.png'

const NavWrapper = styled.div`
  background: #ffffff;

  margin-bottom: 0.13rem;
  img {
    margin-bottom: 0;
  }
`

const NavContainer = styled.div`
  margin: 0 auto;

  max-width: 960px;
  padding: 0.13rem;
`

const About = () => (
  <Layout>
    <div>
      <NavWrapper>
        <NavContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/02_english"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img
                style={{
                  width: '133px',
                }}
                src={logo}
                alt="Geff Logo"
              />
            </Link>
          </h1>
        </NavContainer>
      </NavWrapper>
      <img
        style={{
          width: '333px',
        }}
        src={zero}
        alt="Peter Rabbit"
      />
      <Link to="/"> or go back one page </Link>
    </div>
  </Layout>
)

export default About
